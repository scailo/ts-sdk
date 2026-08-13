[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceUpdateRequest

# Class: PurchasesOrdersServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.PurchasesOrdersServiceUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\>

  ↳ **`PurchasesOrdersServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceUpdateRequest.md#constructor)

### Properties

- [buyerLocationId](PurchasesOrdersServiceUpdateRequest.md#buyerlocationid)
- [consigneeLocationId](PurchasesOrdersServiceUpdateRequest.md#consigneelocationid)
- [currencyId](PurchasesOrdersServiceUpdateRequest.md#currencyid)
- [formData](PurchasesOrdersServiceUpdateRequest.md#formdata)
- [id](PurchasesOrdersServiceUpdateRequest.md#id)
- [miscellaneousCost](PurchasesOrdersServiceUpdateRequest.md#miscellaneouscost)
- [notifyUsers](PurchasesOrdersServiceUpdateRequest.md#notifyusers)
- [overallDiscount](PurchasesOrdersServiceUpdateRequest.md#overalldiscount)
- [paymentAdvance](PurchasesOrdersServiceUpdateRequest.md#paymentadvance)
- [paymentCycleInDays](PurchasesOrdersServiceUpdateRequest.md#paymentcycleindays)
- [projectId](PurchasesOrdersServiceUpdateRequest.md#projectid)
- [referenceId](PurchasesOrdersServiceUpdateRequest.md#referenceid)
- [roundOff](PurchasesOrdersServiceUpdateRequest.md#roundoff)
- [userComment](PurchasesOrdersServiceUpdateRequest.md#usercomment)
- [vaultFolderId](PurchasesOrdersServiceUpdateRequest.md#vaultfolderid)
- [fields](PurchasesOrdersServiceUpdateRequest.md#fields)
- [runtime](PurchasesOrdersServiceUpdateRequest.md#runtime)
- [typeName](PurchasesOrdersServiceUpdateRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceUpdateRequest.md#clone)
- [equals](PurchasesOrdersServiceUpdateRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceUpdateRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceUpdateRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceUpdateRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceUpdateRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceUpdateRequest.md#tojson)
- [toJson](PurchasesOrdersServiceUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceUpdateRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceUpdateRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceUpdateRequest**(`data?`): [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_orders.scailo_pb.ts:783](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L783)

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L718)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L711)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L725)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/purchases_orders.scailo_pb.ts:781](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L781)

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

[src/purchases_orders.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L660)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/purchases_orders.scailo_pb.ts:739](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L739)

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

[src/purchases_orders.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L672)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/purchases_orders.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L746)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:760](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L760)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/purchases_orders.scailo_pb.ts:767](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L767)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:732](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L732)

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

[src/purchases_orders.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L704)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/purchases_orders.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L753)

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

[src/purchases_orders.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L644)

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

[src/purchases_orders.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L688)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:790](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L790)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:788](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L788)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceUpdateRequest"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L789)

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_orders.scailo_pb.ts:820](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L820)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:808](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L808)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L812)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceUpdateRequest`](PurchasesOrdersServiceUpdateRequest.md)

#### Defined in

[src/purchases_orders.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/purchases_orders.scailo_pb.ts#L816)
