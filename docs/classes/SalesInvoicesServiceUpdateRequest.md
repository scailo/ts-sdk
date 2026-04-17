[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoicesServiceUpdateRequest

# Class: SalesInvoicesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalesInvoicesServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

  ↳ **`SalesInvoicesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesInvoicesServiceUpdateRequest.md#constructor)

### Properties

- [bankAccountId](SalesInvoicesServiceUpdateRequest.md#bankaccountid)
- [cumulativeExcessTaxAmount](SalesInvoicesServiceUpdateRequest.md#cumulativeexcesstaxamount)
- [cumulativeExcessTaxGroupId](SalesInvoicesServiceUpdateRequest.md#cumulativeexcesstaxgroupid)
- [currencyId](SalesInvoicesServiceUpdateRequest.md#currencyid)
- [formData](SalesInvoicesServiceUpdateRequest.md#formdata)
- [id](SalesInvoicesServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesInvoicesServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesInvoicesServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesInvoicesServiceUpdateRequest.md#overalldiscount)
- [referenceId](SalesInvoicesServiceUpdateRequest.md#referenceid)
- [roundOff](SalesInvoicesServiceUpdateRequest.md#roundoff)
- [userComment](SalesInvoicesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesInvoicesServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesInvoicesServiceUpdateRequest.md#fields)
- [runtime](SalesInvoicesServiceUpdateRequest.md#runtime)
- [typeName](SalesInvoicesServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesInvoicesServiceUpdateRequest.md#clone)
- [equals](SalesInvoicesServiceUpdateRequest.md#equals)
- [fromBinary](SalesInvoicesServiceUpdateRequest.md#frombinary)
- [fromJson](SalesInvoicesServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesInvoicesServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesInvoicesServiceUpdateRequest.md#gettype)
- [toBinary](SalesInvoicesServiceUpdateRequest.md#tobinary)
- [toJSON](SalesInvoicesServiceUpdateRequest.md#tojson)
- [toJson](SalesInvoicesServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesInvoicesServiceUpdateRequest.md#tojsonstring)
- [equals](SalesInvoicesServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesInvoicesServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesInvoicesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesInvoicesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoicesServiceUpdateRequest**(`data?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesInvoicesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:581](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L581)

## Properties

### bankAccountId

• **bankAccountId**: `bigint` = `protoInt64.zero`

The associated ID of the bank account

**`Generated`**

from field: uint64 bank_account_id = 15;

#### Defined in

[src/sales_invoices.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L537)

___

### cumulativeExcessTaxAmount

• **cumulativeExcessTaxAmount**: `bigint` = `protoInt64.zero`

The excess tax amount

**`Generated`**

from field: uint64 cumulative_excess_tax_amount = 20;

#### Defined in

[src/sales_invoices.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L572)

___

### cumulativeExcessTaxGroupId

• **cumulativeExcessTaxGroupId**: `bigint` = `protoInt64.zero`

The excess tax group

**`Generated`**

from field: uint64 cumulative_excess_tax_group_id = 19;

#### Defined in

[src/sales_invoices.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L565)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 14;

#### Defined in

[src/sales_invoices.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L530)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_invoices.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L579)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_invoices.scailo_pb.ts:479](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L479)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 16;

#### Defined in

[src/sales_invoices.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L544)

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

[src/sales_invoices.scailo_pb.ts:491](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L491)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 17;

#### Defined in

[src/sales_invoices.scailo_pb.ts:551](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L551)

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

[src/sales_invoices.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L523)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 18;

#### Defined in

[src/sales_invoices.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L558)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_invoices.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L472)

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

[src/sales_invoices.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L507)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L588)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L586)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoicesServiceUpdateRequest"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L587)

## Methods

### clone

▸ **clone**(): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L616)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:604](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L604)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:608](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L608)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoicesServiceUpdateRequest`](SalesInvoicesServiceUpdateRequest.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/sales_invoices.scailo_pb.ts#L612)
