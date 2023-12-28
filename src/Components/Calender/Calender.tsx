import classes from "./Calender.module.css"

const Calender = () => {
  return (
    <div className={classes.container}>
          <div className={classes.month}>
              <ul>
                  <li className={classes.prev}>&#10094;</li>
                  <li>August 2021</li>
                  <li className={classes.next}>&#10095;</li>
              </ul>
          </div>

          <ul className={classes.weekdays}>
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
          </ul>

          <ul className={classes.days}>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li><span className={classes.active}>10</span></li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
          </ul>
    </div>
  )
}

export default Calender