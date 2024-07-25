@extends('layouts.app')

@section('title', 'Product Listing')

@section('content')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2 mt-2">Our Products</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
        <button type="button" class="btn btn-sm btn-outline-secondary d-md-none" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false">
            Filters
        </button>
    </div>
</div>

<!-- Quick filters -->
<div class="mb-4 mt-2">
    <button class="btn btn-outline-secondary me-2">All</button>
    <button class="btn btn-outline-secondary me-2">T-Shirts</button>
    <button class="btn btn-outline-secondary me-2">Jackets</button>
</div>

<!-- Product list -->
<div id="product-list" class="row">
    <!-- Products will be dynamically added here -->
</div>
@endsection

@section('scripts')
<script src="{{ asset('js/script.js') }}"></script>
@endsection