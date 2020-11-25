import React, {useCallback, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput'


const FormDialog = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const inputName = useCallback((event) => {
        setName(event.target.value)},
        [setName])

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)},
        [setEmail])

    const inputDescription = useCallback((event) => {
        setDescription(event.target.value)},
        [setDescription])

    const validateEmailFormat = (email) => {
          const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          return regex.test(email)
      }
  
    const validateRequiredInput = (...args) => {
          let isBlank = false;
          for (let i = 0; i < args.length; i=(i+1)|0) {
              if (args[i] === "") {
                  isBlank = true;
              }
          }
          return isBlank
      };

    const submitForm = () => {
      const isBlank = validateRequiredInput(name, email, description)
      const isValidEmail = validateEmailFormat(email)

      if (isBlank) {
          alert('必須入力欄が空白です。')
          return false
      } else if (!isValidEmail) {
          alert('メールアドレスの書式が異なります。')
          return false
      } else {
        alert('送信が完了しました。追ってご連絡いたします。(apiの接続が難しかったため、実際には送られていません。ごめんなさい。)')
        setDescription("")
        setEmail("")
        setName("")
        return props.handleClose()
      }
  };

  const cancelForm = () => {
    setDescription("")
    setEmail("")
    setName("")
    return props.handleClose()
  };

    return(
        <Dialog
        open={props.open}
        onClose={props.handleClose}
        >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextInput 
                label={"お名前(必須)"}
                multiline={false}
                rows={1}
                value={name}
                type={"text"}
                onChange={inputName}
            />
            <TextInput 
                label={"メールアドレス（必須）"}
                multiline={false}
                rows={1}
                value={email}
                type={"text"}
                onChange={inputEmail}
            />
            <TextInput 
                label={"内容"}
                multiline={true}
                rows={5}
                value={description}
                type={"text"}
                onChange={inputDescription}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelForm} color="primary">
            キャンセル
          </Button>
          <Button onClick={submitForm} color="primary" autoFocus>
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default FormDialog;