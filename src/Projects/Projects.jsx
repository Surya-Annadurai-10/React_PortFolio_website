import styles from './Projects.module.css'
import godrej from '../assets/godrej.png'
import boat from '../assets/boat.png'
import sticky from '../assets/sticky.png'
import book from '../assets/book.png'
import movie from '../assets/movie.png'
import expense from '../assets/expense.png'
import stock from '../assets/stock.png'

const Projects = () =>{
    return (
        <>
        <div id='4' className={styles.main_con}>
            <h1 className={styles.header}>Projects</h1>
          <div className={styles.inner}>
          <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={godrej} alt="godrej" />
            </div>
            <h2 className={styles.heading}>Godrej Clone</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/Godrej'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://surya-annadurai-10.github.io/Godrej/Surya/Home/index.html'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
           {/* <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={boat} alt="boat" />
            </div>
            <h2 className={styles.heading}>Boat Clone</h2>
            <div className={styles.hide}>
                <a href=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div> */}
           <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={expense} alt="expense" />
            </div>
            <h2 className={styles.heading}>Expense Tracker</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/JS_Geekathon_Expense_Tracker_App'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://surya-annadurai-10.github.io/JS_Geekathon_Expense_Tracker_App/landingPage/landing.html'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
           <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={book} alt="book" />
            </div>
            <h2 className={styles.heading}>Book App</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/JS_WeeklyTest5_Book_App'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://surya-annadurai-10.github.io/JS_WeeklyTest5_Book_App/home/index.html'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
           <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={movie} alt="movie" />
            </div>
            <h2 className={styles.heading}>Movie Search App</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/JS_Movie_Search_App'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://surya-annadurai-10.github.io/JS_Movie_Search_App/'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
           <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={sticky} alt="sticky" />
            </div>
            <h2 className={styles.heading}>Sticky Notes</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/JS_Sticky-Notes-Project'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://surya-annadurai-10.github.io/JS_Sticky-Notes-Project/'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
           <div className={styles.project_con}>
            <div className={styles.project_img}>
            <img src={stock} alt="stock" />
            </div>
            <h2 className={styles.heading}>Stock Trader Dashboard</h2>
            <div className={styles.hide}>
                <a href='https://github.com/Surya-Annadurai-10/JS_ReMCT4_Stock_Trader_Dashboard'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
               </svg>
               <p>github</p>
                </a>
                <a href='https://js-re-mct-4-stock-trader-dashboard-3wy2jliuf.vercel.app/'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 29.167969 2 L 7 2 L 7 48 L 43 48 L 43 15.433594 Z M 28.503906 35.121094 L 13.632813 35.121094 L 21.117188 25 L 28.503906 35.121094 L 25.566406 31.070313 L 28.503906 27.023438 L 34.472656 35.121094 Z M 33.527344 25 C 32.480469 25 31.632813 24.175781 31.632813 23.160156 C 31.632813 22.144531 32.480469 21.320313 33.527344 21.320313 C 34.570313 21.320313 35.421875 22.144531 35.421875 23.160156 C 35.421875 24.175781 34.570313 25 33.527344 25 Z M 29 16 L 29 4 L 41 16 Z"></path>
                </svg>
               <p>demo</p>
                </a>
            </div>
           </div>
          
          </div>
        </div>
        </>
    )
}

export default Projects;