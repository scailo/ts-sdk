[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServicePaginatedItemsResponse

# Class: SalesEnquiriesServicePaginatedItemsResponse

Paginated response packet containing a subset of Sales Enquiry Item records.
Includes complete operational state parameters for rendering frontend data grids and tables.

**`Generated`**

from message Scailo.SalesEnquiriesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\>

  ↳ **`SalesEnquiriesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](SalesEnquiriesServicePaginatedItemsResponse.md#count)
- [offset](SalesEnquiriesServicePaginatedItemsResponse.md#offset)
- [payload](SalesEnquiriesServicePaginatedItemsResponse.md#payload)
- [total](SalesEnquiriesServicePaginatedItemsResponse.md#total)
- [fields](SalesEnquiriesServicePaginatedItemsResponse.md#fields)
- [runtime](SalesEnquiriesServicePaginatedItemsResponse.md#runtime)
- [typeName](SalesEnquiriesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](SalesEnquiriesServicePaginatedItemsResponse.md#clone)
- [equals](SalesEnquiriesServicePaginatedItemsResponse.md#equals)
- [fromBinary](SalesEnquiriesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](SalesEnquiriesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](SalesEnquiriesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](SalesEnquiriesServicePaginatedItemsResponse.md#gettype)
- [toBinary](SalesEnquiriesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](SalesEnquiriesServicePaginatedItemsResponse.md#tojson)
- [toJson](SalesEnquiriesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](SalesEnquiriesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](SalesEnquiriesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](SalesEnquiriesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](SalesEnquiriesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServicePaginatedItemsResponse**(`data?`): [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\> |

#### Returns

[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;SalesEnquiriesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2265](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2265)

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

[src/sales_enquiries.scailo_pb.ts:2235](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2235)

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

[src/sales_enquiries.scailo_pb.ts:2245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2245)

___

### payload

• **payload**: [`SalesEnquiryItem`](SalesEnquiryItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.SalesEnquiryItem payload = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2263](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2263)

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

[src/sales_enquiries.scailo_pb.ts:2255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2255)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2272](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2272)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2270](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2270)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServicePaginatedItemsResponse"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2271](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2271)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2291](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2291)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2279](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2279)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2283)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServicePaginatedItemsResponse`](SalesEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2287](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/sales_enquiries.scailo_pb.ts#L2287)
