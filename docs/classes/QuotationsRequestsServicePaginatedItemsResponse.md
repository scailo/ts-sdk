[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServicePaginatedItemsResponse

# Class: QuotationsRequestsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.QuotationsRequestsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

  ↳ **`QuotationsRequestsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](QuotationsRequestsServicePaginatedItemsResponse.md#count)
- [offset](QuotationsRequestsServicePaginatedItemsResponse.md#offset)
- [payload](QuotationsRequestsServicePaginatedItemsResponse.md#payload)
- [total](QuotationsRequestsServicePaginatedItemsResponse.md#total)
- [fields](QuotationsRequestsServicePaginatedItemsResponse.md#fields)
- [runtime](QuotationsRequestsServicePaginatedItemsResponse.md#runtime)
- [typeName](QuotationsRequestsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](QuotationsRequestsServicePaginatedItemsResponse.md#clone)
- [equals](QuotationsRequestsServicePaginatedItemsResponse.md#equals)
- [fromBinary](QuotationsRequestsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](QuotationsRequestsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](QuotationsRequestsServicePaginatedItemsResponse.md#gettype)
- [toBinary](QuotationsRequestsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](QuotationsRequestsServicePaginatedItemsResponse.md#tojson)
- [toJson](QuotationsRequestsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](QuotationsRequestsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](QuotationsRequestsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](QuotationsRequestsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServicePaginatedItemsResponse**(`data?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;QuotationsRequestsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1405

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:1382

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/quotations_requests.scailo_pb.ts:1389

___

### payload

• **payload**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.QuotationRequestItem payload = 4;

#### Defined in

src/quotations_requests.scailo_pb.ts:1403

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/quotations_requests.scailo_pb.ts:1396

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1412

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1410

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServicePaginatedItemsResponse"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1411

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1431

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1419

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1423

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginatedItemsResponse`](QuotationsRequestsServicePaginatedItemsResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1427
