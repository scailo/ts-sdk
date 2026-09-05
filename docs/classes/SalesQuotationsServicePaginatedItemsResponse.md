[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServicePaginatedItemsResponse

# Class: SalesQuotationsServicePaginatedItemsResponse

Paginated response packet containing a subset of Sales Quotation Item records.
Includes complete operational state parameters for rendering frontend data grids and tables.

**`Generated`**

from message Scailo.SalesQuotationsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\>

  ↳ **`SalesQuotationsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](SalesQuotationsServicePaginatedItemsResponse.md#count)
- [offset](SalesQuotationsServicePaginatedItemsResponse.md#offset)
- [payload](SalesQuotationsServicePaginatedItemsResponse.md#payload)
- [total](SalesQuotationsServicePaginatedItemsResponse.md#total)
- [fields](SalesQuotationsServicePaginatedItemsResponse.md#fields)
- [runtime](SalesQuotationsServicePaginatedItemsResponse.md#runtime)
- [typeName](SalesQuotationsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](SalesQuotationsServicePaginatedItemsResponse.md#clone)
- [equals](SalesQuotationsServicePaginatedItemsResponse.md#equals)
- [fromBinary](SalesQuotationsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](SalesQuotationsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](SalesQuotationsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](SalesQuotationsServicePaginatedItemsResponse.md#gettype)
- [toBinary](SalesQuotationsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](SalesQuotationsServicePaginatedItemsResponse.md#tojson)
- [toJson](SalesQuotationsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](SalesQuotationsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](SalesQuotationsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](SalesQuotationsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](SalesQuotationsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](SalesQuotationsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServicePaginatedItemsResponse**(`data?`): [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\> |

#### Returns

[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;SalesQuotationsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:4759](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4759)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4729](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4729)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4739](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4739)

___

### payload

• **payload**: [`SalesQuotationItem`](SalesQuotationItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.SalesQuotationItem payload = 4;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4757](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4757)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/sales_quotations.scailo_pb.ts:4749](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4749)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4766](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4766)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4764](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4764)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServicePaginatedItemsResponse"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:4765](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4765)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:4785](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4785)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4773](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4773)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4777](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4777)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServicePaginatedItemsResponse`](SalesQuotationsServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:4781](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_quotations.scailo_pb.ts#L4781)
