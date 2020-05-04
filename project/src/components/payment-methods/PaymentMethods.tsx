import React from 'react'
import cx from "classnames"

interface PaymentMethodsProps{
  className?: string  
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ className }) => {
    return (
      <div className={cx("",className)}>
        PaymentMethods
      </div>
    );
}

