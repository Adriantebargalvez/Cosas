import {Component, OnInit} from '@angular/core';
import {Movie} from "../../common/Movie";
import {MovieService} from "../../services/movie.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  //primero
  movies: Movie[] = [];
  miData='';
  //primero
  formMovie: FormGroup = this.formBuilder.group(
    {
      _id: [''],
      __v: [0],
      title: [''],
      year: [new Date().getFullYear()],
      director: [''],
      plot: [''],
      poster: [''],
      genres: [],
      imgb: this.formBuilder.group({
        rating: [0],
        votes: [0]
      })
    }
  );
  myNewGenre = new FormGroup({
    newGenre: new FormControl('')

  });
  genres: string[] = [];
  editar = false;

  //primero
  constructor(private movieServices: MovieService, private formBuilder: FormBuilder) {
  }
//primero
  get title(): any {
    return this.formMovie.get('title')?.value;
  }

  get year(): any {
    return this.formMovie.get('year');
  }

  get director(): any {
    return this.formMovie.get('director');
  }

  get plot(): any {
    return this.formMovie.get('plot');
  }

  get poster(): any {
    return this.formMovie.get('poster')?.value;
  }

  get genresF(): any {
    return this.formMovie.get('genresF')?.value;
  }

  get rating(): any {
    return this.formMovie.get('rating');
  }get votes(): any {
    return this.formMovie.get('votes');
  }

  get newGenres(): any {
    return this.myNewGenre.get('newGenres')?.value;
  }
//primero
  ngOnInit() {
    this.loadMovieList()
  }

  private loadMovieList() {
    this.movieServices.getMovieList().subscribe({
      next: value => {
        this.movies = value;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done')
      }
    })
    //primero
    this.movieServices.getGenres().subscribe({
      next: value => {
        this.genres = value;
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }

  onSubmit() {
    if (this.editar) {
      this.movieServices.updateMovie(this.formMovie.getRawValue()).subscribe({
        next: value => {
          this.loadMovieList();
          alert(value.status);
        },
        error: err => {
          alert(err.error.message);
          console.error(err);
        },
        complete: () => {
          console.log('done')
        }
      })

    } else {
      this.movieServices.addMovie(this.formMovie.getRawValue()).subscribe({
          next: value => {
            this.loadMovieList();
            alert(value.status)
          },
          error: err => {
            console.error(err);
          },
          complete: () => {
            console.log('Done')
          }
        }
      )
    }
  }

  loadMovie(movie: Movie) {
    this.formMovie.setValue(movie)
    this.editar = true;
  }

  newMovie() {
    this.formMovie.reset();
     this.formMovie.get('year')?.setValue(new Date().getFullYear());
    this.editar = false;
  }

  addNewGenre(newGenres: string) {
    let newGenre;
    if (!this.editar) this.genres.push(newGenres)
    else {
      newGenre = this.formMovie.getRawValue().genres;
      newGenre.push(newGenres);
      this.genres.push(newGenres);
      this.formMovie.setControl('genres', new FormControl(newGenres));
      this.myNewGenre.reset();
    }
  }

  removeMovie(movie: Movie) {
    if (confirm('Desea borrar' + movie.title + '?')) {
      this.movieServices.deleteMovie(movie._id).subscribe({
        next: value => {
          alert(value.status);
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Done');
        }
      })
    }
  }

  protected readonly faCirclePlus = faCirclePlus;
  protected readonly faTrash = faTrash;
}


