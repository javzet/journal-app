import { ReactNode } from "react";

export const FormButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="button-container">
      <button type="submit" className={className}>
        {children}
      </button>
    </div>
  );
};

export const GoogleFormButton = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="button-container">
      <button className={className ? `google-btn ${className}` : "google-btn"}>
        <div className="google-icon">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <span>{children}</span>
      </button>
    </div>
  );
};
