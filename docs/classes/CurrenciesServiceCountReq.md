[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CurrenciesServiceCountReq

# Class: CurrenciesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.CurrenciesServiceCountReq

## Hierarchy

- `Message`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

  ↳ **`CurrenciesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](CurrenciesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](CurrenciesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](CurrenciesServiceCountReq.md#approvedonend)
- [approvedOnStart](CurrenciesServiceCountReq.md#approvedonstart)
- [approverRoleId](CurrenciesServiceCountReq.md#approverroleid)
- [creationTimestampEnd](CurrenciesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](CurrenciesServiceCountReq.md#creationtimestampstart)
- [entityUuid](CurrenciesServiceCountReq.md#entityuuid)
- [isActive](CurrenciesServiceCountReq.md#isactive)
- [modificationTimestampEnd](CurrenciesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](CurrenciesServiceCountReq.md#modificationtimestampstart)
- [name](CurrenciesServiceCountReq.md#name)
- [status](CurrenciesServiceCountReq.md#status)
- [symbol](CurrenciesServiceCountReq.md#symbol)
- [fields](CurrenciesServiceCountReq.md#fields)
- [runtime](CurrenciesServiceCountReq.md#runtime)
- [typeName](CurrenciesServiceCountReq.md#typename)

### Methods

- [clone](CurrenciesServiceCountReq.md#clone)
- [equals](CurrenciesServiceCountReq.md#equals)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary)
- [fromJson](CurrenciesServiceCountReq.md#fromjson)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring)
- [getType](CurrenciesServiceCountReq.md#gettype)
- [toBinary](CurrenciesServiceCountReq.md#tobinary)
- [toJSON](CurrenciesServiceCountReq.md#tojson)
- [toJson](CurrenciesServiceCountReq.md#tojson-1)
- [toJsonString](CurrenciesServiceCountReq.md#tojsonstring)
- [equals](CurrenciesServiceCountReq.md#equals-1)
- [fromBinary](CurrenciesServiceCountReq.md#frombinary-1)
- [fromJson](CurrenciesServiceCountReq.md#fromjson-1)
- [fromJsonString](CurrenciesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CurrenciesServiceCountReq**(`data?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Overrides

Message\&lt;CurrenciesServiceCountReq\&gt;.constructor

#### Defined in

[src/currencies.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L845)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/currencies.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L822)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/currencies.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L815)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/currencies.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L808)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/currencies.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L829)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/currencies.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L773)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/currencies.scailo_pb.ts:766](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L766)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/currencies.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L794)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/currencies.scailo_pb.ts:759](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L759)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/currencies.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L787)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/currencies.scailo_pb.ts:780](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L780)

___

### name

• **name**: `string` = `""`

The name of the currency

**`Generated`**

from field: string name = 20;

#### Defined in

[src/currencies.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L836)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this currency

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/currencies.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L801)

___

### symbol

• **symbol**: `string` = `""`

The unique symbol by which the currency is classified

**`Generated`**

from field: string symbol = 21;

#### Defined in

[src/currencies.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L843)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/currencies.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L852)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/currencies.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L850)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CurrenciesServiceCountReq"``

#### Defined in

[src/currencies.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L851)

## Methods

### clone

▸ **clone**(): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

Create a deep copy.

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |
| `b` | `undefined` \| [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md) \| `PlainMessage`\<[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/currencies.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L880)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L868)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L872)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CurrenciesServiceCountReq`](CurrenciesServiceCountReq.md)

#### Defined in

[src/currencies.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/currencies.scailo_pb.ts#L876)
