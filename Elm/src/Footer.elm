module Footer exposing (footerView)

import Html exposing (Html, footer, p, text)

footerView : Html msg
footerView =
    footer []
        [ p [] [ text "© 2025 Your Name" ] ]
