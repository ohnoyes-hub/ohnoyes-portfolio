module Main exposing (main)

import Browser
import Html exposing (Html, div)
import Header exposing (headerView)
import About exposing (aboutView)
import Skills exposing (skillsView)
import Projects exposing (projectsView)
import Body exposing (bodyView)
import Footer exposing (footerView)

-- MODEL
type alias Model =
    {}


initialModel : Model
initialModel =
    {}


-- UPDATE
type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


-- VIEW
view : Model -> Html Msg
view model =
    div []
        [ headerView
        , bodyView
        , aboutView
        , skillsView
        , projectsView
        , footerView
        ]


-- MAIN
main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> ( initialModel, Cmd.none )
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }