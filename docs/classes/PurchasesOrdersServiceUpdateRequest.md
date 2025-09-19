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

[src/purchases_orders.scailo_pb.ts:692](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L692)

## Properties

### buyerLocationId

• **buyerLocationId**: `bigint` = `protoInt64.zero`

The location ID of the buyer

**`Generated`**

from field: uint64 buyer_location_id = 13;

#### Defined in

[src/purchases_orders.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L634)

___

### consigneeLocationId

• **consigneeLocationId**: `bigint` = `protoInt64.zero`

The location ID of the consignee

**`Generated`**

from field: uint64 consignee_location_id = 12;

#### Defined in

[src/purchases_orders.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L627)

___

### currencyId

• **currencyId**: `bigint` = `protoInt64.zero`

The associated ID of the currency

**`Generated`**

from field: uint64 currency_id = 15;

#### Defined in

[src/purchases_orders.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L641)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/purchases_orders.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L690)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/purchases_orders.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L599)

___

### miscellaneousCost

• **miscellaneousCost**: `bigint` = `protoInt64.zero`

Any miscellaneous cost

**`Generated`**

from field: uint64 miscellaneous_cost = 17;

#### Defined in

[src/purchases_orders.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L655)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/purchases_orders.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L606)

___

### overallDiscount

• **overallDiscount**: `bigint` = `protoInt64.zero`

The optional discount amount

**`Generated`**

from field: uint64 overall_discount = 18;

#### Defined in

[src/purchases_orders.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L662)

___

### paymentAdvance

• **paymentAdvance**: `bigint` = `protoInt64.zero`

The amount paid in advance

**`Generated`**

from field: uint64 payment_advance = 20;

#### Defined in

[src/purchases_orders.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L676)

___

### paymentCycleInDays

• **paymentCycleInDays**: `bigint` = `protoInt64.zero`

The payment cycle in days

**`Generated`**

from field: uint64 payment_cycle_in_days = 21;

#### Defined in

[src/purchases_orders.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L683)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The optional associated ID of the project

**`Generated`**

from field: uint64 project_id = 16;

#### Defined in

[src/purchases_orders.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L648)

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the purchase order

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/purchases_orders.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L620)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 19;

#### Defined in

[src/purchases_orders.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L669)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_orders.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L592)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/purchases_orders.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L613)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_orders.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L699)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_orders.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L697)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceUpdateRequest"``

#### Defined in

[src/purchases_orders.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L698)

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

[src/purchases_orders.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L729)

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

[src/purchases_orders.scailo_pb.ts:717](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L717)

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

[src/purchases_orders.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L721)

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

[src/purchases_orders.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_orders.scailo_pb.ts#L725)
