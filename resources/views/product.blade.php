@extends('layouts.product')

@section('title', 'Product | Gestourage')

@section('content')
<div class="row mt-5">
    <div class="col-md-6">
        <img id="product-image" src="" alt="" class="img-fluid ">
    </div>
    <div class="col-md-6">
        <h1 id="product-title" class="mt-3 mb-2"></h1>
        <p id="product-price" class="lead"></p>
        <p id="product-description"></p>
        <form>
            <div class="mb-3 mt-4">
                <label for="size" class="form-label">Size</label>
                <select class="form-select" id="size"></select>
            </div>
            <div class="mb-4">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="quantity" value="1" min="1">
            </div>
        </form>
        <h4 class="mt-4">Sizing & Fit</h4>
        <p id="product-sizeAndFit"></p>
        <button type="submit" class="btn btn-outline-dark mt-3 mb-5">Add to Cart</button>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ asset('js/product.js') }}"></script>
@endsection