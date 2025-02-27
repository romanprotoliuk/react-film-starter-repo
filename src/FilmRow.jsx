import Fave from './Fave'

// class FilmRow extends Component {

//   handleDetailsClick = (film) => {
//       console.log(film)
//     }

//     render () {
        // let releaseYear = this.props.film.release_date.substr(0,this.props.film.release_date.indexOf('-'))   
        // let imgSrc = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
//     return (
      // <>
      //   <div className='film-row' onClick={() => this.handleDetailsClick(this.props.film.title)}>
      //     <img src={imgSrc} alt='' />

      //     <div className='film-summary'>
      //       <h1>{this.props.film.title}</h1>
      //       <p>{releaseYear}</p>
      //     </div>
      //     <Fave key={this.props.film.id}/>
      //   </div>
      // </>
//     )
//   }
// }

const FilmRow = ({film, onFaveToggle, isFave, handleDetailsClick}) => {
  
  

  let releaseYear = film.release_date.substr(0,film.release_date.indexOf('-'))   
  let imgSrc = `https://image.tmdb.org/t/p/w780/${film.poster_path}`

  return (
    <>
      <div
        className='film-row'
        onClick={() => handleDetailsClick(film)}>
          <img src={imgSrc} alt='' />

          <div className='film-summary'>
            <h1>{film.title}</h1>
            <p>{releaseYear}</p>
          </div>
        <Fave key={film.id} isFave={isFave} onFaveToggle={() => { onFaveToggle(film) }}/>
        </div>
      </>
  )


}

export default FilmRow