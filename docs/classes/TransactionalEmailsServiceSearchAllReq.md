[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TransactionalEmailsServiceSearchAllReq

# Class: TransactionalEmailsServiceSearchAllReq

Describes the request payload for performing a generic search operation on transactional emails

**`Generated`**

from message Scailo.TransactionalEmailsServiceSearchAllReq

## Hierarchy

- `Message`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\>

  ↳ **`TransactionalEmailsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](TransactionalEmailsServiceSearchAllReq.md#constructor)

### Properties

- [count](TransactionalEmailsServiceSearchAllReq.md#count)
- [entityUuid](TransactionalEmailsServiceSearchAllReq.md#entityuuid)
- [isActive](TransactionalEmailsServiceSearchAllReq.md#isactive)
- [offset](TransactionalEmailsServiceSearchAllReq.md#offset)
- [searchKey](TransactionalEmailsServiceSearchAllReq.md#searchkey)
- [sortKey](TransactionalEmailsServiceSearchAllReq.md#sortkey)
- [sortOrder](TransactionalEmailsServiceSearchAllReq.md#sortorder)
- [fields](TransactionalEmailsServiceSearchAllReq.md#fields)
- [runtime](TransactionalEmailsServiceSearchAllReq.md#runtime)
- [typeName](TransactionalEmailsServiceSearchAllReq.md#typename)

### Methods

- [clone](TransactionalEmailsServiceSearchAllReq.md#clone)
- [equals](TransactionalEmailsServiceSearchAllReq.md#equals)
- [fromBinary](TransactionalEmailsServiceSearchAllReq.md#frombinary)
- [fromJson](TransactionalEmailsServiceSearchAllReq.md#fromjson)
- [fromJsonString](TransactionalEmailsServiceSearchAllReq.md#fromjsonstring)
- [getType](TransactionalEmailsServiceSearchAllReq.md#gettype)
- [toBinary](TransactionalEmailsServiceSearchAllReq.md#tobinary)
- [toJSON](TransactionalEmailsServiceSearchAllReq.md#tojson)
- [toJson](TransactionalEmailsServiceSearchAllReq.md#tojson-1)
- [toJsonString](TransactionalEmailsServiceSearchAllReq.md#tojsonstring)
- [equals](TransactionalEmailsServiceSearchAllReq.md#equals-1)
- [fromBinary](TransactionalEmailsServiceSearchAllReq.md#frombinary-1)
- [fromJson](TransactionalEmailsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](TransactionalEmailsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TransactionalEmailsServiceSearchAllReq**(`data?`): [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\> |

#### Returns

[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Overrides

Message\&lt;TransactionalEmailsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/transactional_emails.scailo_pb.ts:763](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L763)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/transactional_emails.scailo_pb.ts:726](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L726)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter transactional emails

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/transactional_emails.scailo_pb.ts:754](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L754)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/transactional_emails.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L719)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/transactional_emails.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L733)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 10;

#### Defined in

[src/transactional_emails.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L761)

___

### sortKey

• **sortKey**: [`TRANSACTIONAL_EMAIL_SORT_KEY`](../enums/TRANSACTIONAL_EMAIL_SORT_KEY.md) = `TRANSACTIONAL_EMAIL_SORT_KEY.TRANSACTIONAL_EMAIL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the response

**`Generated`**

from field: Scailo.TRANSACTIONAL_EMAIL_SORT_KEY sort_key = 5;

#### Defined in

[src/transactional_emails.scailo_pb.ts:747](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L747)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/transactional_emails.scailo_pb.ts:740](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L740)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/transactional_emails.scailo_pb.ts:770](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L770)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/transactional_emails.scailo_pb.ts:768](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L768)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TransactionalEmailsServiceSearchAllReq"``

#### Defined in

[src/transactional_emails.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L769)

## Methods

### clone

▸ **clone**(): [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md) \| `PlainMessage`\<[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/transactional_emails.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L792)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L780)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:784](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L784)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TransactionalEmailsServiceSearchAllReq`](TransactionalEmailsServiceSearchAllReq.md)

#### Defined in

[src/transactional_emails.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/d2ec702cea580ca309f095c7118072f83e1bd44a/src/transactional_emails.scailo_pb.ts#L788)
