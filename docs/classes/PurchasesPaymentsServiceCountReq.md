[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceCountReq

# Class: PurchasesPaymentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.PurchasesPaymentsServiceCountReq

## Hierarchy

- `Message`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\>

  ↳ **`PurchasesPaymentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesPaymentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesPaymentsServiceCountReq.md#approvedonend)
- [approvedOnStart](PurchasesPaymentsServiceCountReq.md#approvedonstart)
- [approverRoleId](PurchasesPaymentsServiceCountReq.md#approverroleid)
- [bankAccountId](PurchasesPaymentsServiceCountReq.md#bankaccountid)
- [completedOnEnd](PurchasesPaymentsServiceCountReq.md#completedonend)
- [completedOnStart](PurchasesPaymentsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](PurchasesPaymentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesPaymentsServiceCountReq.md#creationtimestampstart)
- [currencyId](PurchasesPaymentsServiceCountReq.md#currencyid)
- [entityUuid](PurchasesPaymentsServiceCountReq.md#entityuuid)
- [finalRefNumber](PurchasesPaymentsServiceCountReq.md#finalrefnumber)
- [isActive](PurchasesPaymentsServiceCountReq.md#isactive)
- [modificationTimestampEnd](PurchasesPaymentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesPaymentsServiceCountReq.md#modificationtimestampstart)
- [paymentTimestampEnd](PurchasesPaymentsServiceCountReq.md#paymenttimestampend)
- [paymentTimestampStart](PurchasesPaymentsServiceCountReq.md#paymenttimestampstart)
- [refFrom](PurchasesPaymentsServiceCountReq.md#reffrom)
- [refId](PurchasesPaymentsServiceCountReq.md#refid)
- [referenceId](PurchasesPaymentsServiceCountReq.md#referenceid)
- [status](PurchasesPaymentsServiceCountReq.md#status)
- [transactionType](PurchasesPaymentsServiceCountReq.md#transactiontype)
- [vendorId](PurchasesPaymentsServiceCountReq.md#vendorid)
- [fields](PurchasesPaymentsServiceCountReq.md#fields)
- [runtime](PurchasesPaymentsServiceCountReq.md#runtime)
- [typeName](PurchasesPaymentsServiceCountReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceCountReq.md#clone)
- [equals](PurchasesPaymentsServiceCountReq.md#equals)
- [fromBinary](PurchasesPaymentsServiceCountReq.md#frombinary)
- [fromJson](PurchasesPaymentsServiceCountReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceCountReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceCountReq.md#gettype)
- [toBinary](PurchasesPaymentsServiceCountReq.md#tobinary)
- [toJSON](PurchasesPaymentsServiceCountReq.md#tojson)
- [toJson](PurchasesPaymentsServiceCountReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceCountReq.md#tojsonstring)
- [equals](PurchasesPaymentsServiceCountReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceCountReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceCountReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceCountReq**(`data?`): [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\> |

#### Returns

[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Overrides

Message\&lt;PurchasesPaymentsServiceCountReq\&gt;.constructor

#### Defined in

[src/purchases_payments.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1272)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1179](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1179)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1172](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1172)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1165](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1165)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1186)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1242)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1200)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1193)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1130](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1130)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1123)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 26;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1249](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1249)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1151](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1151)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1214)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1116](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1116)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1144)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1137)

___

### paymentTimestampEnd

• **paymentTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_end = 29;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1270](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1270)

___

### paymentTimestampStart

• **paymentTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_start = 28;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1263](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1263)

___

### refFrom

• **refFrom**: [`PURCHASE_PAYMENT_REF_FROM`](../enums/PURCHASE_PAYMENT_REF_FROM.md) = `PURCHASE_PAYMENT_REF_FROM.PURCHASE_PAYMENT_REF_FROM_ANY_UNSPECIFIED`

The reference on which the purchase payment has been created

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 22;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1221)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1228](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1228)

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the purchase payment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1207](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1207)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase payment

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1158)

___

### transactionType

• **transactionType**: [`TRANSACTION_TYPE`](../enums/TRANSACTION_TYPE.md) = `TRANSACTION_TYPE.TRANSACTION_TYPE_ANY_UNSPECIFIED`

The type of the transaction

**`Generated`**

from field: Scailo.TRANSACTION_TYPE transaction_type = 27;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1256](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1256)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

[src/purchases_payments.scailo_pb.ts:1235](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1235)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1279](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1279)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1277)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServiceCountReq"``

#### Defined in

[src/purchases_payments.scailo_pb.ts:1278](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1278)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1317)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1305)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1309)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCountReq`](PurchasesPaymentsServiceCountReq.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:1313](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/purchases_payments.scailo_pb.ts#L1313)
