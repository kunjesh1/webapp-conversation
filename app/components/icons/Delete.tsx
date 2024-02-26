import React from 'react'

type DeleteIconProps = {
    className: string
}

const DeleteIcon: React.FC<DeleteIconProps> = ({ className }) => {
    return <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1">
        <path d="M6.6665 7.33333V11.3333M9.33317 7.33333V11.3333M2.6665 4.66667H13.3332M12.6665 4.66667L12.0885 12.7613C12.0646 13.0977 11.914 13.4125 11.6672 13.6424C11.4205 13.8722 11.0957 14 10.7585 14H5.24117C4.90393 14 4.57922 13.8722 4.33243 13.6424C4.08564 13.4125 3.93511 13.0977 3.91117 12.7613L3.33317 4.66667H12.6665ZM9.99984 4.66667V2.66667C9.99984 2.48986 9.9296 2.32029 9.80457 2.19526C9.67955 2.07024 9.50998 2 9.33317 2H6.6665C6.48969 2 6.32012 2.07024 6.1951 2.19526C6.07008 2.32029 5.99984 2.48986 5.99984 2.66667V4.66667H9.99984Z" stroke="#1F2A37" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


}

export default DeleteIcon