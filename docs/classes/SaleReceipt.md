[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SaleReceipt

# Class: SaleReceipt

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SaleReceipt

## Hierarchy

- `Message`\<[`SaleReceipt`](SaleReceipt.md)\>

  ↳ **`SaleReceipt`**

## Table of contents

### Constructors

- [constructor](SaleReceipt.md#constructor)

### Properties

- [amountBase](SaleReceipt.md#amountbase)
- [amountNet](SaleReceipt.md#amountnet)
- [approvalMetadata](SaleReceipt.md#approvalmetadata)
- [bankAccountId](SaleReceipt.md#bankaccountid)
- [clientId](SaleReceipt.md#clientid)
- [completedOn](SaleReceipt.md#completedon)
- [currencyId](SaleReceipt.md#currencyid)
- [description](SaleReceipt.md#description)
- [entityUuid](SaleReceipt.md#entityuuid)
- [finalRefNumber](SaleReceipt.md#finalrefnumber)
- [logs](SaleReceipt.md#logs)
- [metadata](SaleReceipt.md#metadata)
- [paymentTimestamp](SaleReceipt.md#paymenttimestamp)
- [refFrom](SaleReceipt.md#reffrom)
- [refId](SaleReceipt.md#refid)
- [referenceId](SaleReceipt.md#referenceid)
- [status](SaleReceipt.md#status)
- [transactionType](SaleReceipt.md#transactiontype)
- [vaultFolderId](SaleReceipt.md#vaultfolderid)
- [fields](SaleReceipt.md#fields)
- [runtime](SaleReceipt.md#runtime)
- [typeName](SaleReceipt.md#typename)

### Methods

- [clone](SaleReceipt.md#clone)
- [equals](SaleReceipt.md#equals)
- [fromBinary](SaleReceipt.md#frombinary)
- [fromJson](SaleReceipt.md#fromjson)
- [fromJsonString](SaleReceipt.md#fromjsonstring)
- [getType](SaleReceipt.md#gettype)
- [toBinary](SaleReceipt.md#tobinary)
- [toJSON](SaleReceipt.md#tojson)
- [toJson](SaleReceipt.md#tojson-1)
- [toJsonString](SaleReceipt.md#tojsonstring)
- [equals](SaleReceipt.md#equals-1)
- [fromBinary](SaleReceipt.md#frombinary-1)
- [fromJson](SaleReceipt.md#fromjson-1)
- [fromJsonString](SaleReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new SaleReceipt**(`data?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SaleReceipt`](SaleReceipt.md)\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Overrides

Message\&lt;SaleReceipt\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L575)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: uint64 amount_base = 18;

#### Defined in

[src/sales_receipts.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L552)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: uint64 amount_net = 19;

#### Defined in

[src/sales_receipts.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L559)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_receipts.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L461)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_receipts.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L531)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client

**`Generated`**

from field: uint64 client_id = 14;

#### Defined in

[src/sales_receipts.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L524)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this sales receipt was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/sales_receipts.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L482)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 16;

#### Defined in

[src/sales_receipts.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L538)

___

### description

• **description**: `string` = `""`

The description of the sales receipt

**`Generated`**

from field: string description = 21;

#### Defined in

[src/sales_receipts.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L573)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_receipts.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L447)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_receipts.scailo_pb.ts:503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L503)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this sales receipt

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_receipts.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L475)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales receipt

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_receipts.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L454)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: uint64 payment_timestamp = 20;

#### Defined in

[src/sales_receipts.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L566)

___

### refFrom

• **refFrom**: `string` = `""`

The reference on which the sales receipt has been created

**`Generated`**

from field: string ref_from = 12;

#### Defined in

[src/sales_receipts.scailo_pb.ts:510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L510)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_receipts.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L517)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales receipt

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_receipts.scailo_pb.ts:496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L496)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales receipt

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_receipts.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L468)

___

### transactionType

• **transactionType**: `string` = `""`

The type of the transaction

**`Generated`**

from field: string transaction_type = 17;

#### Defined in

[src/sales_receipts.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L545)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_receipts.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L489)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L582)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L580)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SaleReceipt"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L581)

## Methods

### clone

▸ **clone**(): [`SaleReceipt`](SaleReceipt.md)

Create a deep copy.

#### Returns

[`SaleReceipt`](SaleReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`\<[`SaleReceipt`](SaleReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`SaleReceipt`](SaleReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SaleReceipt`](SaleReceipt.md)\>

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
| `a` | `undefined` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`\<[`SaleReceipt`](SaleReceipt.md)\> |
| `b` | `undefined` \| [`SaleReceipt`](SaleReceipt.md) \| `PlainMessage`\<[`SaleReceipt`](SaleReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L616)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L604)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L608)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SaleReceipt`](SaleReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SaleReceipt`](SaleReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L612)
