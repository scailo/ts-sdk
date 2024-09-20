[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceFilterReq

# Class: PurchasesPaymentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.PurchasesPaymentsServiceFilterReq

## Hierarchy

- `Message`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

  ↳ **`PurchasesPaymentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](PurchasesPaymentsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](PurchasesPaymentsServiceFilterReq.md#approvedonend)
- [approvedOnStart](PurchasesPaymentsServiceFilterReq.md#approvedonstart)
- [approverRoleId](PurchasesPaymentsServiceFilterReq.md#approverroleid)
- [bankAccountId](PurchasesPaymentsServiceFilterReq.md#bankaccountid)
- [completedOnEnd](PurchasesPaymentsServiceFilterReq.md#completedonend)
- [completedOnStart](PurchasesPaymentsServiceFilterReq.md#completedonstart)
- [count](PurchasesPaymentsServiceFilterReq.md#count)
- [creationTimestampEnd](PurchasesPaymentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](PurchasesPaymentsServiceFilterReq.md#creationtimestampstart)
- [currencyId](PurchasesPaymentsServiceFilterReq.md#currencyid)
- [entityUuid](PurchasesPaymentsServiceFilterReq.md#entityuuid)
- [finalRefNumber](PurchasesPaymentsServiceFilterReq.md#finalrefnumber)
- [isActive](PurchasesPaymentsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](PurchasesPaymentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](PurchasesPaymentsServiceFilterReq.md#modificationtimestampstart)
- [offset](PurchasesPaymentsServiceFilterReq.md#offset)
- [paymentTimestampEnd](PurchasesPaymentsServiceFilterReq.md#paymenttimestampend)
- [paymentTimestampStart](PurchasesPaymentsServiceFilterReq.md#paymenttimestampstart)
- [refFrom](PurchasesPaymentsServiceFilterReq.md#reffrom)
- [refId](PurchasesPaymentsServiceFilterReq.md#refid)
- [referenceId](PurchasesPaymentsServiceFilterReq.md#referenceid)
- [sortKey](PurchasesPaymentsServiceFilterReq.md#sortkey)
- [sortOrder](PurchasesPaymentsServiceFilterReq.md#sortorder)
- [status](PurchasesPaymentsServiceFilterReq.md#status)
- [transactionType](PurchasesPaymentsServiceFilterReq.md#transactiontype)
- [vendorId](PurchasesPaymentsServiceFilterReq.md#vendorid)
- [fields](PurchasesPaymentsServiceFilterReq.md#fields)
- [runtime](PurchasesPaymentsServiceFilterReq.md#runtime)
- [typeName](PurchasesPaymentsServiceFilterReq.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceFilterReq.md#clone)
- [equals](PurchasesPaymentsServiceFilterReq.md#equals)
- [fromBinary](PurchasesPaymentsServiceFilterReq.md#frombinary)
- [fromJson](PurchasesPaymentsServiceFilterReq.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceFilterReq.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceFilterReq.md#gettype)
- [toBinary](PurchasesPaymentsServiceFilterReq.md#tobinary)
- [toJSON](PurchasesPaymentsServiceFilterReq.md#tojson)
- [toJson](PurchasesPaymentsServiceFilterReq.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceFilterReq.md#tojsonstring)
- [equals](PurchasesPaymentsServiceFilterReq.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceFilterReq.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceFilterReq**(`data?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Overrides

Message\&lt;PurchasesPaymentsServiceFilterReq\&gt;.constructor

#### Defined in

src/purchases_payments.scailo_pb.ts:1007

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/purchases_payments.scailo_pb.ts:914

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/purchases_payments.scailo_pb.ts:907

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/purchases_payments.scailo_pb.ts:900

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/purchases_payments.scailo_pb.ts:921

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 25;

#### Defined in

src/purchases_payments.scailo_pb.ts:977

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/purchases_payments.scailo_pb.ts:935

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/purchases_payments.scailo_pb.ts:928

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/purchases_payments.scailo_pb.ts:830

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/purchases_payments.scailo_pb.ts:865

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/purchases_payments.scailo_pb.ts:858

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 26;

#### Defined in

src/purchases_payments.scailo_pb.ts:984

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/purchases_payments.scailo_pb.ts:886

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/purchases_payments.scailo_pb.ts:949

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/purchases_payments.scailo_pb.ts:823

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/purchases_payments.scailo_pb.ts:879

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/purchases_payments.scailo_pb.ts:872

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/purchases_payments.scailo_pb.ts:837

___

### paymentTimestampEnd

• **paymentTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_end = 29;

#### Defined in

src/purchases_payments.scailo_pb.ts:1005

___

### paymentTimestampStart

• **paymentTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the payment timestamp

**`Generated`**

from field: uint64 payment_timestamp_start = 28;

#### Defined in

src/purchases_payments.scailo_pb.ts:998

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the purchase payment has been created

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/purchases_payments.scailo_pb.ts:956

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/purchases_payments.scailo_pb.ts:963

___

### referenceId

• **referenceId**: `string` = `""`

The reference_id of the purchase payment

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/purchases_payments.scailo_pb.ts:942

___

### sortKey

• **sortKey**: [`PURCHASE_PAYMENT_SORT_KEY`](../enums/PURCHASE_PAYMENT_SORT_KEY.md) = `PURCHASE_PAYMENT_SORT_KEY.PURCHASE_PAYMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_SORT_KEY sort_key = 5;

#### Defined in

src/purchases_payments.scailo_pb.ts:851

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/purchases_payments.scailo_pb.ts:844

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this purchase payment

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/purchases_payments.scailo_pb.ts:893

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 27;

#### Defined in

src/purchases_payments.scailo_pb.ts:991

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 24;

#### Defined in

src/purchases_payments.scailo_pb.ts:970

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_payments.scailo_pb.ts:1014

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_payments.scailo_pb.ts:1012

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServiceFilterReq"``

#### Defined in

src/purchases_payments.scailo_pb.ts:1013

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_payments.scailo_pb.ts:1056

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:1044

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:1048

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceFilterReq`](PurchasesPaymentsServiceFilterReq.md)

#### Defined in

src/purchases_payments.scailo_pb.ts:1052
