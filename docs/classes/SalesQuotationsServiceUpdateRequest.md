[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationsServiceUpdateRequest

# Class: SalesQuotationsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.SalesQuotationsServiceUpdateRequest

## Hierarchy

- `Message`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

  ↳ **`SalesQuotationsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationsServiceUpdateRequest.md#constructor)

### Properties

- [buyerClientId](SalesQuotationsServiceUpdateRequest.md#buyerclientid)
- [consigneeClientId](SalesQuotationsServiceUpdateRequest.md#consigneeclientid)
- [currencyId](SalesQuotationsServiceUpdateRequest.md#currencyid)
- [formData](SalesQuotationsServiceUpdateRequest.md#formdata)
- [id](SalesQuotationsServiceUpdateRequest.md#id)
- [miscellaneousCost](SalesQuotationsServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](SalesQuotationsServiceUpdateRequest.md#notifyusers)
- [overallDiscount](SalesQuotationsServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](SalesQuotationsServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](SalesQuotationsServiceUpdateRequest.md#paymentcycleindays)
- [projectId](SalesQuotationsServiceUpdateRequest.md#projectid)
- [referenceId](SalesQuotationsServiceUpdateRequest.md#referenceid)
- [roundOff](SalesQuotationsServiceUpdateRequest.md#roundoff)
- [userComment](SalesQuotationsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](SalesQuotationsServiceUpdateRequest.md#vaultfolderid)
- [fields](SalesQuotationsServiceUpdateRequest.md#fields)
- [runtime](SalesQuotationsServiceUpdateRequest.md#runtime)
- [typeName](SalesQuotationsServiceUpdateRequest.md#typename)

### Methods

- [clone](SalesQuotationsServiceUpdateRequest.md#clone)
- [equals](SalesQuotationsServiceUpdateRequest.md#equals)
- [fromBinary](SalesQuotationsServiceUpdateRequest.md#frombinary)
- [fromJson](SalesQuotationsServiceUpdateRequest.md#fromjson)
- [fromJsonString](SalesQuotationsServiceUpdateRequest.md#fromjsonstring)
- [getType](SalesQuotationsServiceUpdateRequest.md#gettype)
- [toBinary](SalesQuotationsServiceUpdateRequest.md#tobinary)
- [toJSON](SalesQuotationsServiceUpdateRequest.md#tojson)
- [toJson](SalesQuotationsServiceUpdateRequest.md#tojson-1)
- [toJsonString](SalesQuotationsServiceUpdateRequest.md#tojsonstring)
- [equals](SalesQuotationsServiceUpdateRequest.md#equals-1)
- [fromBinary](SalesQuotationsServiceUpdateRequest.md#frombinary-1)
- [fromJson](SalesQuotationsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationsServiceUpdateRequest**(`data?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Overrides

Message\&lt;SalesQuotationsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L688)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer (client)

**`Generated`**

from field: uint64 buyer_client_id = 13;

#### Defined in

[src/sales_quotations.scailo_pb.ts:630](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L630)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee (client)

**`Generated`**

from field: uint64 consignee_client_id = 12;

#### Defined in

[src/sales_quotations.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L623)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/sales_quotations.scailo_pb.ts:637](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L637)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/sales_quotations.scailo_pb.ts:686](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L686)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:572](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L572)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/sales_quotations.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L651)

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

[src/sales_quotations.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L584)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/sales_quotations.scailo_pb.ts:658](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L658)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/sales_quotations.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L672)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/sales_quotations.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L679)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/sales_quotations.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L644)

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

[src/sales_quotations.scailo_pb.ts:616](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L616)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/sales_quotations.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L665)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:565](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L565)

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

[src/sales_quotations.scailo_pb.ts:600](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L600)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L695)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:693](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L693)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationsServiceUpdateRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:694](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L694)

## Methods

### clone

▸ **clone**(): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md) \| `PlainMessage`\<[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L725)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L713)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L717)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationsServiceUpdateRequest`](SalesQuotationsServiceUpdateRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/sales_quotations.scailo_pb.ts#L721)
