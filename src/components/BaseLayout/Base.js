import React from "react";
import Header from "../Header";
import Footer from "../MainFooter";
// import AuthContext from '../Store/Auth'

export const BaseLayout = ({ children, type }) => {
    return (
        <div>
            {type === "wrap" ? (
                <div>
                    <Header />
                    {children}
                    <Footer />
                </div>
            ) : (
                <div className="test1">{children}</div>
            )}
        </div>
    );
};