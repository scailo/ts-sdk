[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseEnquiriesServicePaginatedItemsResponse

# Class: PurchaseEnquiriesServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.PurchaseEnquiriesServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\>

  ↳ **`PurchaseEnquiriesServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](PurchaseEnquiriesServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](PurchaseEnquiriesServicePaginatedItemsResponse.md#count)
- [offset](PurchaseEnquiriesServicePaginatedItemsResponse.md#offset)
- [payload](PurchaseEnquiriesServicePaginatedItemsResponse.md#payload)
- [total](PurchaseEnquiriesServicePaginatedItemsResponse.md#total)
- [fields](PurchaseEnquiriesServicePaginatedItemsResponse.md#fields)
- [runtime](PurchaseEnquiriesServicePaginatedItemsResponse.md#runtime)
- [typeName](PurchaseEnquiriesServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](PurchaseEnquiriesServicePaginatedItemsResponse.md#clone)
- [equals](PurchaseEnquiriesServicePaginatedItemsResponse.md#equals)
- [fromBinary](PurchaseEnquiriesServicePaginatedItemsResponse.md#frombinary)
- [fromJson](PurchaseEnquiriesServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](PurchaseEnquiriesServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](PurchaseEnquiriesServicePaginatedItemsResponse.md#gettype)
- [toBinary](PurchaseEnquiriesServicePaginatedItemsResponse.md#tobinary)
- [toJSON](PurchaseEnquiriesServicePaginatedItemsResponse.md#tojson)
- [toJson](PurchaseEnquiriesServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](PurchaseEnquiriesServicePaginatedItemsResponse.md#tojsonstring)
- [equals](PurchaseEnquiriesServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](PurchaseEnquiriesServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](PurchaseEnquiriesServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](PurchaseEnquiriesServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseEnquiriesServicePaginatedItemsResponse**(`data?`): [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\> |

#### Returns

[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;PurchaseEnquiriesServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1376](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1376)

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

[src/purchases_enquiries.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1346)

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

[src/purchases_enquiries.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1356)

___

### payload

• **payload**: [`PurchaseEnquiryItem`](PurchaseEnquiryItem.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.PurchaseEnquiryItem payload = 4;

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1374)

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

[src/purchases_enquiries.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1366)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1383](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1383)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1381)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseEnquiriesServicePaginatedItemsResponse"``

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1382)

## Methods

### clone

▸ **clone**(): [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1402)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1390](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1390)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1394)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseEnquiriesServicePaginatedItemsResponse`](PurchaseEnquiriesServicePaginatedItemsResponse.md)

#### Defined in

[src/purchases_enquiries.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_enquiries.scailo_pb.ts#L1398)
