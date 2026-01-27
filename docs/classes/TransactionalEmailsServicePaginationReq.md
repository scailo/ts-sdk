[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServicePaginationReq

# Class: TransactionalEmailsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.TransactionalEmailsServicePaginationReq

## Hierarchy

- `Message`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

  ↳ **`TransactionalEmailsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServicePaginationReq.md#constructor)

### Properties

- [count](TransactionalEmailsServicePaginationReq.md#count)
- [isActive](TransactionalEmailsServicePaginationReq.md#isactive)
- [offset](TransactionalEmailsServicePaginationReq.md#offset)
- [sortKey](TransactionalEmailsServicePaginationReq.md#sortkey)
- [sortOrder](TransactionalEmailsServicePaginationReq.md#sortorder)
- [fields](TransactionalEmailsServicePaginationReq.md#fields)
- [runtime](TransactionalEmailsServicePaginationReq.md#runtime)
- [typeName](TransactionalEmailsServicePaginationReq.md#typename)

### Methods

- [clone](TransactionalEmailsServicePaginationReq.md#clone)
- [equals](TransactionalEmailsServicePaginationReq.md#equals)
- [fromBinary](TransactionalEmailsServicePaginationReq.md#frombinary)
- [fromJson](TransactionalEmailsServicePaginationReq.md#fromjson)
- [fromJsonString](TransactionalEmailsServicePaginationReq.md#fromjsonstring)
- [getType](TransactionalEmailsServicePaginationReq.md#gettype)
- [toBinary](TransactionalEmailsServicePaginationReq.md#tobinary)
- [toJSON](TransactionalEmailsServicePaginationReq.md#tojson)
- [toJson](TransactionalEmailsServicePaginationReq.md#tojson-1)
- [toJsonString](TransactionalEmailsServicePaginationReq.md#tojsonstring)
- [equals](TransactionalEmailsServicePaginationReq.md#equals-1)
- [fromBinary](TransactionalEmailsServicePaginationReq.md#frombinary-1)
- [fromJson](TransactionalEmailsServicePaginationReq.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServicePaginationReq**(`data?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Overrides

Message\&lt;TransactionalEmailsServicePaginationReq\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L399)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L376)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L369)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/transactional_emails.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L383)

___

### sortKey

• **sortKey**: [`TRANSACTIONAL_EMAIL_SORT_KEY`](../enums/TRANSACTIONAL_EMAIL_SORT_KEY.md) = `TRANSACTIONAL_EMAIL_SORT_KEY.TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;

#### Defined in

[src/transactional_emails.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L397)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/transactional_emails.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L390)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L406)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L404)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServicePaginationReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L405)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md) \| `PlainMessage`\<[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L426)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L414)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L418)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServicePaginationReq`](TransactionalEmailsServicePaginationReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/15b109c9b02e5ed92b10e654becaecb13162ec78/src/transactional_emails.scailo_pb.ts#L422)
