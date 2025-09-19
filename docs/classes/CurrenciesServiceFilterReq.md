[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceFilterReq

# Class: CurrenciesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.CurrenciesServiceFilterReq

## Hierarchy

- `Message`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

  ↳ **`CurrenciesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](CurrenciesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](CurrenciesServiceFilterReq.md#approvedonend)
- [approvedOnStart](CurrenciesServiceFilterReq.md#approvedonstart)
- [approverRoleId](CurrenciesServiceFilterReq.md#approverroleid)
- [count](CurrenciesServiceFilterReq.md#count)
- [creationTimestampEnd](CurrenciesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](CurrenciesServiceFilterReq.md#entityuuid)
- [isActive](CurrenciesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](CurrenciesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](CurrenciesServiceFilterReq.md#modificationtimestampstart)
- [name](CurrenciesServiceFilterReq.md#name)
- [offset](CurrenciesServiceFilterReq.md#offset)
- [sortKey](CurrenciesServiceFilterReq.md#sortkey)
- [sortOrder](CurrenciesServiceFilterReq.md#sortorder)
- [status](CurrenciesServiceFilterReq.md#status)
- [symbol](CurrenciesServiceFilterReq.md#symbol)
- [fields](CurrenciesServiceFilterReq.md#fields)
- [runtime](CurrenciesServiceFilterReq.md#runtime)
- [typeName](CurrenciesServiceFilterReq.md#typename)

### Methods

- [clone](CurrenciesServiceFilterReq.md#clone)
- [equals](CurrenciesServiceFilterReq.md#equals)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring)
- [getType](CurrenciesServiceFilterReq.md#gettype)
- [toBinary](CurrenciesServiceFilterReq.md#tobinary)
- [toJSON](CurrenciesServiceFilterReq.md#tojson)
- [toJson](CurrenciesServiceFilterReq.md#tojson-1)
- [toJsonString](CurrenciesServiceFilterReq.md#tojsonstring)
- [equals](CurrenciesServiceFilterReq.md#equals-1)
- [fromBinary](CurrenciesServiceFilterReq.md#frombinary-1)
- [fromJson](CurrenciesServiceFilterReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceFilterReq**(`data?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Overrides

Message\&lt;CurrenciesServiceFilterReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L703)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/currencies.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L680)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/currencies.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L673)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/currencies.scailo_pb.ts:666](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L666)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/currencies.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L687)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/currencies.scailo_pb.ts:596](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L596)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/currencies.scailo_pb.ts:631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L631)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/currencies.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L624)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/currencies.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L652)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/currencies.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L589)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/currencies.scailo_pb.ts:645](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L645)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/currencies.scailo_pb.ts:638](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L638)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 20;

#### Defined in

[src/currencies.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L694)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/currencies.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L603)

___

### sortKey

• **sortKey**: [`CURRENCY_SORT_KEY`](../enums/CURRENCY_SORT_KEY.md) = `CURRENCY_SORT_KEY.CURRENCY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;

#### Defined in

[src/currencies.scailo_pb.ts:617](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L617)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/currencies.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L610)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this currency

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/currencies.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L659)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

[src/currencies.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L701)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:710](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L710)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:708](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L708)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceFilterReq"``

#### Defined in

[src/currencies.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L709)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md) \| `PlainMessage`\<[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L742)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:730](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L730)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L734)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceFilterReq`](CurrenciesServiceFilterReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L738)
