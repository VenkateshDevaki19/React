import React from "react";
import styles from "./Review.module.css";

const Review = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.review_container}>
        <div className={styles.image_container}>
          <img
            src="https://s3-alpha-sig.figma.com/img/e438/3d6d/4399ed7db374fc7598b07df58b1d6602?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MJNxCcgVIzRqgozaES-fEoeZLNZP9wNRlpu01C51yXDuUbtG3~iF2qsiZ9jJQ-AkR8jJK~8M-fqyeKIpKaD5phBbyJX-RE27aRAfk0xFaZjQJwsHErStY0q7530Fk8~p4PvasavHe9F~oBz5jtbX2aFkSvilqK5Q7bmwVfqTzYF~TZYh8FkuRU2ouLr5vfCdxMEGwdTUyNOViKvqkU-QLI-XSEwDz9L1AJQKmB4ypCeeyv3dRYdL~WpBgdIla24r3My~ls2rqVEwNEF2KNF0GpergF3jliBnjVTYytI9fcAGO8eL~~jIsg36WwRlv5X07YNLblTXuKoseXSvrjljcg__"
            alt="profile_image"
          />
        </div>

        <h2 className={styles.userName}>Susan smith</h2>
        <p className={styles.role}>web developer</p>

        <div className="info_container">
          <p>
            I'm baby meggings twee health goth +1. Bicycle rights tumeric
            chartreuse before they sold out chambray pop-up. Shaman humblebrag
            pickled coloring book salvia hoodie, cold-pressed four dollar toast
            everyday carry
          </p>
        </div>
        <div className="button_container">
          <button>
            <svg
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.09843 8.33711L8.69022 0.745703C9.05624 0.379688 9.64999 0.379688 10.016 0.745703L10.9016 1.63125C11.2672 1.99688 11.2676 2.58906 10.9031 2.95547L4.88632 9L10.9027 15.0449C11.2676 15.4113 11.2668 16.0035 10.9012 16.3691L10.0156 17.2547C9.6496 17.6207 9.05585 17.6207 8.68983 17.2547L1.09843 9.66289C0.73241 9.29688 0.73241 8.70312 1.09843 8.33711Z"
                fill="#3C3799"
              />
            </svg>
          </button>

          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4_11)">
                <path
                  d="M14.9014 10.6629L7.30985 18.2545C6.94371 18.6206 6.35012 18.6206 5.98403 18.2545L5.0986 17.369C4.73309 17.0035 4.73238 16.4111 5.09703 16.0448L11.1135 10L5.09703 3.95527C4.73238 3.58891 4.73309 2.99652 5.0986 2.63101L5.98403 1.74559C6.35016 1.37945 6.94375 1.37945 7.30985 1.74559L14.9014 9.33711C15.2675 9.7032 15.2675 10.2968 14.9014 10.6629Z"
                  fill="#3C3799"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_11">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <button>Surprise Me</button>
      </div>
    </div>
  );
};

export default Review;
