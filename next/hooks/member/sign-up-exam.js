import React, { useState } from 'react';

export default function SignupExam(values) {
    const { email, password, confirmPassword } = values
  
    // 清空錯誤訊息
    setErrorMessage('');
  
    // 檢查是否有輸入 email、password 和 confirmPassword
    if (!email || !password || !confirmPassword) {
      setErrorMessage('所有欄位都必須填寫');
      return '所有欄位都必須填寫';
    }
  
    // 檢查信箱格式
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    const isEmailValid = emailRegex.test(email);
  
    // 檢查密碼格式和確認密碼是否一致
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isConfirmPasswordMatch = password === confirmPassword;
  
    // 返回錯誤訊息
    if (!isEmailValid) {
      setErrorMessage('信箱格式錯誤');
      return '信箱格式錯誤';
    } else if (!isPasswordValid) {
      setErrorMessage('密碼格式錯誤');
      return '密碼格式錯誤';
    } else if (!isConfirmPasswordMatch) {
      setErrorMessage('確認密碼不一致');
      return '確認密碼不一致';
    }
  
    // 如果所有檢查都通過，清空錯誤訊息
    setErrorMessage('');
  
    // 返回 null 表示沒有錯誤
    return null;
  }
  