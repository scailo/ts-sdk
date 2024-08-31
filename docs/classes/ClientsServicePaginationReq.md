[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServicePaginationReq

# Class: ClientsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ClientsServicePaginationReq

## Hierarchy

- `Message`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

  ↳ **`ClientsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ClientsServicePaginationReq.md#constructor)

### Properties

- [count](ClientsServicePaginationReq.md#count)
- [isActive](ClientsServicePaginationReq.md#isactive)
- [offset](ClientsServicePaginationReq.md#offset)
- [sortKey](ClientsServicePaginationReq.md#sortkey)
- [sortOrder](ClientsServicePaginationReq.md#sortorder)
- [status](ClientsServicePaginationReq.md#status)
- [fields](ClientsServicePaginationReq.md#fields)
- [runtime](ClientsServicePaginationReq.md#runtime)
- [typeName](ClientsServicePaginationReq.md#typename)

### Methods

- [clone](ClientsServicePaginationReq.md#clone)
- [equals](ClientsServicePaginationReq.md#equals)
- [fromBinary](ClientsServicePaginationReq.md#frombinary)
- [fromJson](ClientsServicePaginationReq.md#fromjson)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring)
- [getType](ClientsServicePaginationReq.md#gettype)
- [toBinary](ClientsServicePaginationReq.md#tobinary)
- [toJSON](ClientsServicePaginationReq.md#tojson)
- [toJson](ClientsServicePaginationReq.md#tojson-1)
- [toJsonString](ClientsServicePaginationReq.md#tojsonstring)
- [equals](ClientsServicePaginationReq.md#equals-1)
- [fromBinary](ClientsServicePaginationReq.md#frombinary-1)
- [fromJson](ClientsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ClientsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServicePaginationReq**(`data?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Overrides

Message\&lt;ClientsServicePaginationReq\&gt;.constructor

#### Defined in

src/clients.scailo_pb.ts:554

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/clients.scailo_pb.ts:524

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/clients.scailo_pb.ts:517

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/clients.scailo_pb.ts:531

___

### sortKey

• **sortKey**: [`CLIENT_SORT_KEY`](../enums/CLIENT_SORT_KEY.md) = `CLIENT_SORT_KEY.CLIENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CLIENT_SORT_KEY sort_key = 5;

#### Defined in

src/clients.scailo_pb.ts:545

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/clients.scailo_pb.ts:538

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this client

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/clients.scailo_pb.ts:552

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/clients.scailo_pb.ts:561

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/clients.scailo_pb.ts:559

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServicePaginationReq"``

#### Defined in

src/clients.scailo_pb.ts:560

## Methods

### clone

▸ **clone**(): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md) \| `PlainMessage`\<[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/clients.scailo_pb.ts:582

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

src/clients.scailo_pb.ts:570

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

src/clients.scailo_pb.ts:574

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServicePaginationReq`](ClientsServicePaginationReq.md)

#### Defined in

src/clients.scailo_pb.ts:578
