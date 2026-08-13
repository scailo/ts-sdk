[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesPaymentsServiceUpdateRequest

# Class: PurchasesPaymentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.PurchasesPaymentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

  ↳ **`PurchasesPaymentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesPaymentsServiceUpdateRequest.md#constructor)

### Properties

- [amountBase](PurchasesPaymentsServiceUpdateRequest.md#amountbase)
- [amountNet](PurchasesPaymentsServiceUpdateRequest.md#amountnet)
- [bankAccountId](PurchasesPaymentsServiceUpdateRequest.md#bankaccountid)
- [currencyId](PurchasesPaymentsServiceUpdateRequest.md#currencyid)
- [description](PurchasesPaymentsServiceUpdateRequest.md#description)
- [id](PurchasesPaymentsServiceUpdateRequest.md#id)
- [notifyUsers](PurchasesPaymentsServiceUpdateRequest.md#notifyusers)
- [paymentTimestamp](PurchasesPaymentsServiceUpdateRequest.md#paymenttimestamp)
- [referenceId](PurchasesPaymentsServiceUpdateRequest.md#referenceid)
- [transactionType](PurchasesPaymentsServiceUpdateRequest.md#transactiontype)
- [userComment](PurchasesPaymentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesPaymentsServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesPaymentsServiceUpdateRequest.md#fields)
- [runtime](PurchasesPaymentsServiceUpdateRequest.md#runtime)
- [typeName](PurchasesPaymentsServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesPaymentsServiceUpdateRequest.md#clone)
- [equals](PurchasesPaymentsServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesPaymentsServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesPaymentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesPaymentsServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesPaymentsServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesPaymentsServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesPaymentsServiceUpdateRequest.md#tojson)
- [toJson](PurchasesPaymentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesPaymentsServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesPaymentsServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesPaymentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesPaymentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesPaymentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesPaymentsServiceUpdateRequest**(`data?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesPaymentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_payments.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L450)

## Properties

### amountBase

• **amountBase**: `bigint` = `protoInt64.zero`

The initial amount in cents, without any deductions

**`Generated`**

from field: uint64 amount_base = 18;

#### Defined in

[src/purchases_payments.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L427)

___

### amountNet

• **amountNet**: `bigint` = `protoInt64.zero`

The final amount in cents, after all the deductions

**`Generated`**

from field: uint64 amount_net = 19;

#### Defined in

[src/purchases_payments.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L434)

___

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The ID of the associated bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/purchases_payments.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L406)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The ID of the associated currency

**`Generated`**

from field: uint64 currency_id = 16;

#### Defined in

[src/purchases_payments.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L413)

___

### description

• **description**: `string` = `""`

The description of the purchase payment

**`Generated`**

from field: string description = 21;

#### Defined in

[src/purchases_payments.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L448)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/purchases_payments.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L355)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/purchases_payments.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L367)

___

### paymentTimestamp

• **paymentTimestamp**: `bigint` = `protoInt64.zero`

The date & time of when the payment needs to be made

**`Generated`**

from field: uint64 payment_timestamp = 20;

#### Defined in

[src/purchases_payments.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L441)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_payments.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L399)

___

### transactionType

• **transactionType**: [`TRANSACTION_TYPE`](../enums/TRANSACTION_TYPE.md) = `TRANSACTION_TYPE.TRANSACTION_TYPE_ANY_UNSPECIFIED`

The type of the transaction

**`Generated`**

from field: Scailo.TRANSACTION_TYPE transaction_type = 17;

#### Defined in

[src/purchases_payments.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L420)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_payments.scailo_pb.ts:339](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L339)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_payments.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L383)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_payments.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L457)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_payments.scailo_pb.ts:455](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L455)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesPaymentsServiceUpdateRequest"``

#### Defined in

[src/purchases_payments.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L456)

## Methods

### clone

▸ **clone**(): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_payments.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L484)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L472)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L476)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesPaymentsServiceUpdateRequest`](PurchasesPaymentsServiceUpdateRequest.md)

#### Defined in

[src/purchases_payments.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_payments.scailo_pb.ts#L480)
