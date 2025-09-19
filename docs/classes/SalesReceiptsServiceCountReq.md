[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptsServiceCountReq

# Class: SalesReceiptsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.SalesReceiptsServiceCountReq

## Hierarchy

- `Message`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\>

  ↳ **`SalesReceiptsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](SalesReceiptsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](SalesReceiptsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](SalesReceiptsServiceCountReq.md#approvedonend)
- [approvedOnStart](SalesReceiptsServiceCountReq.md#approvedonstart)
- [approverRoleId](SalesReceiptsServiceCountReq.md#approverroleid)
- [bankAccountId](SalesReceiptsServiceCountReq.md#bankaccountid)
- [clientId](SalesReceiptsServiceCountReq.md#clientid)
- [completedOnEnd](SalesReceiptsServiceCountReq.md#completedonend)
- [completedOnStart](SalesReceiptsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](SalesReceiptsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](SalesReceiptsServiceCountReq.md#creationtimestampstart)
- [currencyId](SalesReceiptsServiceCountReq.md#currencyid)
- [entityUuid](SalesReceiptsServiceCountReq.md#entityuuid)
- [finalRefNumber](SalesReceiptsServiceCountReq.md#finalrefnumber)
- [isActive](SalesReceiptsServiceCountReq.md#isactive)
- [modificationTimestampEnd](SalesReceiptsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](SalesReceiptsServiceCountReq.md#modificationtimestampstart)
- [paymentTimestampEnd](SalesReceiptsServiceCountReq.md#paymenttimestampend)
- [paymentTimestampStart](SalesReceiptsServiceCountReq.md#paymenttimestampstart)
- [refFrom](SalesReceiptsServiceCountReq.md#reffrom)
- [refId](SalesReceiptsServiceCountReq.md#refid)
- [referenceId](SalesReceiptsServiceCountReq.md#referenceid)
- [status](SalesReceiptsServiceCountReq.md#status)
- [transactionType](SalesReceiptsServiceCountReq.md#transactiontype)
- [fields](SalesReceiptsServiceCountReq.md#fields)
- [runtime](SalesReceiptsServiceCountReq.md#runtime)
- [typeName](SalesReceiptsServiceCountReq.md#typename)

### Methods

- [clone](SalesReceiptsServiceCountReq.md#clone)
- [equals](SalesReceiptsServiceCountReq.md#equals)
- [fromBinary](SalesReceiptsServiceCountReq.md#frombinary)
- [fromJson](SalesReceiptsServiceCountReq.md#fromjson)
- [fromJsonString](SalesReceiptsServiceCountReq.md#fromjsonstring)
- [getType](SalesReceiptsServiceCountReq.md#gettype)
- [toBinary](SalesReceiptsServiceCountReq.md#tobinary)
- [toJSON](SalesReceiptsServiceCountReq.md#tojson)
- [toJson](SalesReceiptsServiceCountReq.md#tojson-1)
- [toJsonString](SalesReceiptsServiceCountReq.md#tojsonstring)
- [equals](SalesReceiptsServiceCountReq.md#equals-1)
- [fromBinary](SalesReceiptsServiceCountReq.md#frombinary-1)
- [fromJson](SalesReceiptsServiceCountReq.md#fromjson-1)
- [fromJsonString](SalesReceiptsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptsServiceCountReq**(`data?`): [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\> |

#### Returns

[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Overrides

Message\&lt;SalesReceiptsServiceCountReq\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1229)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1136)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1129)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1122)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1143)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1199)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client

**`Generated`**

from field: uint64 client_id = 24;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1192)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1157](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1157)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1150)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1087](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1087)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1080](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1080)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 26;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1206)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1108)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1171](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1171)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1073](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1073)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1101)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1094)

___

### paymentTimestampEnd

• **paymentTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_end = 29;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1227)

___

### paymentTimestampStart

• **paymentTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_start = 28;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1220)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the sales receipt has been created

**`Generated`**

from field: string ref_from = 22;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1178)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1185)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the sales receipt

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1164)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales receipt

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1115)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 27;

#### Defined in

[src/sales_receipts.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1213)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1236)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1234)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReceiptsServiceCountReq"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1235)

## Methods

### clone

▸ **clone**(): [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

Create a deep copy.

#### Returns

[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md) \| `PlainMessage`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md) \| `PlainMessage`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\> |
| `b` | `undefined` \| [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md) \| `PlainMessage`\<[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:1274](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1274)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:1262](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1262)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1266)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptsServiceCountReq`](SalesReceiptsServiceCountReq.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L1270)
