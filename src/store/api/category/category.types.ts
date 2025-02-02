import type {
  IPaginationArgs,
  TApiResponse,
  TNullish,
  TPaginationApiResponse,
} from "../common-api-types"

export enum EStatus {
  Completed = "completed",
  NotCompleted = "not_completed",
}

/**
|--------------------------------------------------
| Create Category Start
|--------------------------------------------------
*/
export type TCreateCategoryArgs = {
  body: {
    category_id: number
    name: string
    price: number
    sub_title: string
    size_ml: number
    quantity: number
    description: string
    quality_details: string
    current_stock: number
    alert_quantity: number
    is_saleable: boolean
    organization_id: number
  }
}

export type TCategory = {
  id?: number
  name?: string
  image_url?: string
  created_at?: string
  updated_at?: string
}

// type TCreateCategoryData = TCategory;

export type TCreateCategoryRes = TApiResponse<TCategory, "POST">
/**
|--------------------------------------------------
| Create Category End
|--------------------------------------------------
*/

/* ******************************************************************************************************************************************************************************************** */

/**
|--------------------------------------------------
| Get All Category Start
|--------------------------------------------------
*/
export type TGetAllCategoryArgs =
  | (IPaginationArgs & {
      sort_by?: string
      sort_order?: string
      search?: string
      filter?: string
    })
  | void

export type TGetAllCategoryData = TCategory[]

export type TGetAllCategoryRes = TPaginationApiResponse<
  TGetAllCategoryData,
  "GET"
>
/**
|--------------------------------------------------
| Get All Category End
|--------------------------------------------------
*/

/* ******************************************************************************************************************************************************************************************** */

/**
|--------------------------------------------------
| Get A Category Start
|--------------------------------------------------
*/
export type TGetACategoryArgs = {
  id: number | string | TNullish
}

// export type TGetACategoryData = TCategory;

export type TGetACategoryRes = TApiResponse<TCategory, "GET">
/**
|--------------------------------------------------
| Get A Category End
|--------------------------------------------------
*/

/* ******************************************************************************************************************************************************************************************** */

/**
|--------------------------------------------------
| Update A Category Start
|--------------------------------------------------
*/
export type TUpdateACategoryArgs = {
  id: number | string | TNullish
  body: {
    category_id?: number
    name?: string
    price?: number
    sub_title?: string
    size_ml?: number
    quantity?: number
    description?: string
    quality_details?: string
    current_stock?: number
    alert_quantity?: number
    is_saleable?: boolean
    organization_id?: number
  }
}

export type TUpdateACategoryRes = TApiResponse<TCategory, "PUT">
/**
|--------------------------------------------------
| Update A Category End
|--------------------------------------------------
*/

/* ******************************************************************************************************************************************************************************************** */

/**
|--------------------------------------------------
| Delete Category Start
|--------------------------------------------------
*/
export type TDeleteACategoryArgs = { id: number | string | TNullish }

export type TDeleteACategoryRes = TApiResponse<undefined, "DELETE">
/**
|--------------------------------------------------
| Delete Category End
|--------------------------------------------------
*/
