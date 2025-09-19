[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / BankAccountsServiceFilterReq

# Class: BankAccountsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.BankAccountsServiceFilterReq

## Hierarchy

- `Message`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

  ↳ **`BankAccountsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](BankAccountsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](BankAccountsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](BankAccountsServiceFilterReq.md#approvedonend)
- [approvedOnStart](BankAccountsServiceFilterReq.md#approvedonstart)
- [approverRoleId](BankAccountsServiceFilterReq.md#approverroleid)
- [code](BankAccountsServiceFilterReq.md#code)
- [count](BankAccountsServiceFilterReq.md#count)
- [creationTimestampEnd](BankAccountsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](BankAccountsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](BankAccountsServiceFilterReq.md#entityuuid)
- [formData](BankAccountsServiceFilterReq.md#formdata)
- [isActive](BankAccountsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](BankAccountsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](BankAccountsServiceFilterReq.md#modificationtimestampstart)
- [name](BankAccountsServiceFilterReq.md#name)
- [offset](BankAccountsServiceFilterReq.md#offset)
- [sortKey](BankAccountsServiceFilterReq.md#sortkey)
- [sortOrder](BankAccountsServiceFilterReq.md#sortorder)
- [status](BankAccountsServiceFilterReq.md#status)
- [fields](BankAccountsServiceFilterReq.md#fields)
- [runtime](BankAccountsServiceFilterReq.md#runtime)
- [typeName](BankAccountsServiceFilterReq.md#typename)

### Methods

- [clone](BankAccountsServiceFilterReq.md#clone)
- [equals](BankAccountsServiceFilterReq.md#equals)
- [fromBinary](BankAccountsServiceFilterReq.md#frombinary)
- [fromJson](BankAccountsServiceFilterReq.md#fromjson)
- [fromJsonString](BankAccountsServiceFilterReq.md#fromjsonstring)
- [getType](BankAccountsServiceFilterReq.md#gettype)
- [toBinary](BankAccountsServiceFilterReq.md#tobinary)
- [toJSON](BankAccountsServiceFilterReq.md#tojson)
- [toJson](BankAccountsServiceFilterReq.md#tojson-1)
- [toJsonString](BankAccountsServiceFilterReq.md#tojsonstring)
- [equals](BankAccountsServiceFilterReq.md#equals-1)
- [fromBinary](BankAccountsServiceFilterReq.md#frombinary-1)
- [fromJson](BankAccountsServiceFilterReq.md#fromjson-1)
- [fromJsonString](BankAccountsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new BankAccountsServiceFilterReq**(`data?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Overrides

Message\&lt;BankAccountsServiceFilterReq\&gt;.constructor

#### Defined in

[src/bank_accounts.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L663)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/bank_accounts.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L633)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/bank_accounts.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L626)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/bank_accounts.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L619)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/bank_accounts.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L640)

___

### code

• **code**: `string` = `""`

The unique code by which the bank account is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/bank_accounts.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L654)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/bank_accounts.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L549)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/bank_accounts.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L584)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/bank_accounts.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L577)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/bank_accounts.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L605)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/bank_accounts.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L661)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/bank_accounts.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L542)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/bank_accounts.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L598)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/bank_accounts.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L591)

___

### name

• **name**: `string` = `""`

The name of the bank account

**`Generated`**

from field: string name = 20;

#### Defined in

[src/bank_accounts.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L647)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/bank_accounts.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L556)

___

### sortKey

• **sortKey**: [`BANK_ACCOUNT_SORT_KEY`](../enums/BANK_ACCOUNT_SORT_KEY.md) = `BANK_ACCOUNT_SORT_KEY.BANK_ACCOUNT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.BANK_ACCOUNT_SORT_KEY sort_key = 5;

#### Defined in

[src/bank_accounts.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L570)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/bank_accounts.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L563)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this bank account

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/bank_accounts.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L612)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/bank_accounts.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L670)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/bank_accounts.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L668)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.BankAccountsServiceFilterReq"``

#### Defined in

[src/bank_accounts.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L669)

## Methods

### clone

▸ **clone**(): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md) \| `PlainMessage`\<[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/bank_accounts.scailo_pb.ts:703](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L703)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L691)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L695)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`BankAccountsServiceFilterReq`](BankAccountsServiceFilterReq.md)

#### Defined in

[src/bank_accounts.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/bank_accounts.scailo_pb.ts#L699)
