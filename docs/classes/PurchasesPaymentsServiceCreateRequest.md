[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceCreateRequest

# Class: PurchasesPaymentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.PurchasesPaymentsServiceCreateRequest

## Hierarchy

- `Message`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\>

  ↳ **`PurchasesPaymentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceCreateRequest.md#constructor)

### Properties

- [amountBase](PurchasesPaymentsServiceCreateRequest.md#amountbase)
- [amountNet](PurchasesPaymentsServiceCreateRequest.md#amountnet)
- [bankAccountId](PurchasesPaymentsServiceCreateRequest.md#bankaccountid)
- [currencyId](PurchasesPaymentsServiceCreateRequest.md#currencyid)
- [description](PurchasesPaymentsServiceCreateRequest.md#description)
- [entityUuid](PurchasesPaymentsServiceCreateRequest.md#entityuuid)
- [paymentTimestamp](PurchasesPaymentsServiceCreateRequest.md#paymenttimestamp)
- [refFrom](PurchasesPaymentsServiceCreateRequest.md#reffrom)
- [refId](PurchasesPaymentsServiceCreateRequest.md#refid)
- [referenceId](PurchasesPaymentsServiceCreateRequest.md#referenceid)
- [transactionType](PurchasesPaymentsServiceCreateRequest.md#transactiontype)
- [userComment](PurchasesPaymentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](PurchasesPaymentsServiceCreateRequest.md#vaultfolderid)
- [fields](PurchasesPaymentsServiceCreateRequest.md#fields)
- [runtime](PurchasesPaymentsServiceCreateRequest.md#runtime)
- [typeName](PurchasesPaymentsServiceCreateRequest.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceCreateRequest.md#clone)
- [equals](PurchasesPaymentsServiceCreateRequest.md#equals)
- [fromBinary](PurchasesPaymentsServiceCreateRequest.md#frombinary)
- [fromJson](PurchasesPaymentsServiceCreateRequest.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceCreateRequest.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceCreateRequest.md#gettype)
- [toBinary](PurchasesPaymentsServiceCreateRequest.md#tobinary)
- [toJSON](PurchasesPaymentsServiceCreateRequest.md#tojson)
- [toJson](PurchasesPaymentsServiceCreateRequest.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceCreateRequest.md#tojsonstring)
- [equals](PurchasesPaymentsServiceCreateRequest.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceCreateRequest.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceCreateRequest**(`data?`): [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\> |

#### Returns

[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Overrides

Message\&lt;PurchasesPaymentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/purchases_payments.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L269)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: uint64 amount_base = 18;

#### Defined in

[src/purchases_payments.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L246)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: uint64 amount_net = 19;

#### Defined in

[src/purchases_payments.scailo_pb.ts:253](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L253)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/purchases_payments.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L225)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 16;

#### Defined in

[src/purchases_payments.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L232)

___

### description

• **description**: `string` = `""`

The description of the purchase payment

**`Generated`**

from field: string description = 21;

#### Defined in

[src/purchases_payments.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L267)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/purchases_payments.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L165)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: uint64 payment_timestamp = 20;

#### Defined in

[src/purchases_payments.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L260)

___

### refFrom

• **refFrom**: [`PURCHASE_PAYMENT_REF_FROM`](../enums/PURCHASE_PAYMENT_REF_FROM.md) = `PURCHASE_PAYMENT_REF_FROM.PURCHASE_PAYMENT_REF_FROM_ANY_UNSPECIFIED`

The reference on which the purchase payment has been created

**`Generated`**

from field: Scailo.PURCHASE_PAYMENT_REF_FROM ref_from = 12;

#### Defined in

[src/purchases_payments.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L211)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The ID of the associated reference

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/purchases_payments.scailo_pb.ts:218](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L218)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_payments.scailo_pb.ts:204](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L204)

___

### transactionType

• **transactionType**: [`TRANSACTION_TYPE`](../enums/TRANSACTION_TYPE.md) = `TRANSACTION_TYPE.TRANSACTION_TYPE_ANY_UNSPECIFIED`

The type of the transaction

**`Generated`**

from field: Scailo.TRANSACTION_TYPE transaction_type = 17;

#### Defined in

[src/purchases_payments.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L239)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/purchases_payments.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L172)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_payments.scailo_pb.ts:188](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L188)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L276)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments.scailo_pb.ts:274](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L274)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServiceCreateRequest"``

#### Defined in

[src/purchases_payments.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L275)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L304)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L292)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L296)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceCreateRequest`](PurchasesPaymentsServiceCreateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/purchases_payments.scailo_pb.ts#L300)
