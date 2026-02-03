[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReceipt

# Class: SalesReceipt

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.SalesReceipt

## Hierarchy

- `Message`\<[`SalesReceipt`](SalesReceipt.md)\>

  ↳ **`SalesReceipt`**

## Table of contents

### Constructors

- [constructor](SalesReceipt.md#constructor)

### Properties

- [amountBase](SalesReceipt.md#amountbase)
- [amountNet](SalesReceipt.md#amountnet)
- [approvalMetadata](SalesReceipt.md#approvalmetadata)
- [bankAccountId](SalesReceipt.md#bankaccountid)
- [clientId](SalesReceipt.md#clientid)
- [completedOn](SalesReceipt.md#completedon)
- [currencyId](SalesReceipt.md#currencyid)
- [description](SalesReceipt.md#description)
- [entityUuid](SalesReceipt.md#entityuuid)
- [finalRefNumber](SalesReceipt.md#finalrefnumber)
- [logs](SalesReceipt.md#logs)
- [metadata](SalesReceipt.md#metadata)
- [paymentTimestamp](SalesReceipt.md#paymenttimestamp)
- [refFrom](SalesReceipt.md#reffrom)
- [refId](SalesReceipt.md#refid)
- [referenceId](SalesReceipt.md#referenceid)
- [status](SalesReceipt.md#status)
- [transactionType](SalesReceipt.md#transactiontype)
- [vaultFolderId](SalesReceipt.md#vaultfolderid)
- [fields](SalesReceipt.md#fields)
- [runtime](SalesReceipt.md#runtime)
- [typeName](SalesReceipt.md#typename)

### Methods

- [clone](SalesReceipt.md#clone)
- [equals](SalesReceipt.md#equals)
- [fromBinary](SalesReceipt.md#frombinary)
- [fromJson](SalesReceipt.md#fromjson)
- [fromJsonString](SalesReceipt.md#fromjsonstring)
- [getType](SalesReceipt.md#gettype)
- [toBinary](SalesReceipt.md#tobinary)
- [toJSON](SalesReceipt.md#tojson)
- [toJson](SalesReceipt.md#tojson-1)
- [toJsonString](SalesReceipt.md#tojsonstring)
- [equals](SalesReceipt.md#equals-1)
- [fromBinary](SalesReceipt.md#frombinary-1)
- [fromJson](SalesReceipt.md#fromjson-1)
- [fromJsonString](SalesReceipt.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceipt**(`data?`): [`SalesReceipt`](SalesReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReceipt`](SalesReceipt.md)\> |

#### Returns

[`SalesReceipt`](SalesReceipt.md)

#### Overrides

Message\&lt;SalesReceipt\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:618](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L618)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: uint64 amount_base = 18;

#### Defined in

[src/sales_receipts.scailo_pb.ts:595](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L595)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: uint64 amount_net = 19;

#### Defined in

[src/sales_receipts.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L602)

___

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_receipts.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L504)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_receipts.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L574)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the associated client

**`Generated`**

from field: uint64 client_id = 14;

#### Defined in

[src/sales_receipts.scailo_pb.ts:567](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L567)

___

### completedOn

• **completedOn**: `bigint` = `protoInt64.zero`

The timestamp of when this sales receipt was marked as completed

**`Generated`**

from field: uint64 completed_on = 6;

#### Defined in

[src/sales_receipts.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L525)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 16;

#### Defined in

[src/sales_receipts.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L581)

___

### description

• **description**: `string` = `""`

The description of the sales receipt

**`Generated`**

from field: string description = 21;

#### Defined in

[src/sales_receipts.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L616)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_receipts.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L490)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 11;

#### Defined in

[src/sales_receipts.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L546)

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this sales receipt

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

[src/sales_receipts.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L518)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales receipt

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_receipts.scailo_pb.ts:497](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L497)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: uint64 payment_timestamp = 20;

#### Defined in

[src/sales_receipts.scailo_pb.ts:609](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L609)

___

### refFrom

• **refFrom**: [`SALES_RECEIPT_REF_FROM`](../enums/SALES_RECEIPT_REF_FROM.md) = `SALES_RECEIPT_REF_FROM.SALES_RECEIPT_REF_FROM_ANY_UNSPECIFIED`

The reference on which the sales receipt has been created

**`Generated`**

from field: Scailo.SALES_RECEIPT_REF_FROM ref_from = 12;

#### Defined in

[src/sales_receipts.scailo_pb.ts:553](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L553)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/sales_receipts.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L560)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the sales receipt

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/sales_receipts.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L539)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this sales receipt

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

[src/sales_receipts.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L511)

___

### transactionType

• **transactionType**: [`TRANSACTION_TYPE`](../enums/TRANSACTION_TYPE.md) = `TRANSACTION_TYPE.TRANSACTION_TYPE_ANY_UNSPECIFIED`

The type of the transaction

**`Generated`**

from field: Scailo.TRANSACTION_TYPE transaction_type = 17;

#### Defined in

[src/sales_receipts.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L588)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/sales_receipts.scailo_pb.ts:532](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L532)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:625](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L625)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L623)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReceipt"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:624](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L624)

## Methods

### clone

▸ **clone**(): [`SalesReceipt`](SalesReceipt.md)

Create a deep copy.

#### Returns

[`SalesReceipt`](SalesReceipt.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceipt`](SalesReceipt.md) \| `PlainMessage`\<[`SalesReceipt`](SalesReceipt.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReceipt`](SalesReceipt.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReceipt`](SalesReceipt.md)\>

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
| `a` | `undefined` \| [`SalesReceipt`](SalesReceipt.md) \| `PlainMessage`\<[`SalesReceipt`](SalesReceipt.md)\> |
| `b` | `undefined` \| [`SalesReceipt`](SalesReceipt.md) \| `PlainMessage`\<[`SalesReceipt`](SalesReceipt.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L659)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceipt`](SalesReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReceipt`](SalesReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L647)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceipt`](SalesReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceipt`](SalesReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L651)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceipt`](SalesReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceipt`](SalesReceipt.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/6aafe0f5853eb6eab77b66c6b60daac3df9963ce/src/sales_receipts.scailo_pb.ts#L655)
