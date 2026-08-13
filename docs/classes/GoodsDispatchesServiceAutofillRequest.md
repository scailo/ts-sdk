[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchesServiceAutofillRequest

# Class: GoodsDispatchesServiceAutofillRequest

Request message to automatically populate a Goods Dispatch with pending line items from its source document.
This operational "autofill" mechanism accelerates the warehouse fulfillment process by querying the linked
parent record (e.g., an approved Sales Order) and automatically generating preliminary dispatch items for all
remaining unfulfilled quantities. This drastically reduces manual data entry errors and ensures strict
logistical alignment with the original commercial contract.

**`Generated`**

from message Scailo.GoodsDispatchesServiceAutofillRequest

## Hierarchy

- `Message`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

  ↳ **`GoodsDispatchesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchesServiceAutofillRequest.md#constructor)

### Properties

- [splitIntoUnitQuantity](GoodsDispatchesServiceAutofillRequest.md#splitintounitquantity)
- [userComment](GoodsDispatchesServiceAutofillRequest.md#usercomment)
- [uuid](GoodsDispatchesServiceAutofillRequest.md#uuid)
- [fields](GoodsDispatchesServiceAutofillRequest.md#fields)
- [runtime](GoodsDispatchesServiceAutofillRequest.md#runtime)
- [typeName](GoodsDispatchesServiceAutofillRequest.md#typename)

### Methods

- [clone](GoodsDispatchesServiceAutofillRequest.md#clone)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring)
- [getType](GoodsDispatchesServiceAutofillRequest.md#gettype)
- [toBinary](GoodsDispatchesServiceAutofillRequest.md#tobinary)
- [toJSON](GoodsDispatchesServiceAutofillRequest.md#tojson)
- [toJson](GoodsDispatchesServiceAutofillRequest.md#tojson-1)
- [toJsonString](GoodsDispatchesServiceAutofillRequest.md#tojsonstring)
- [equals](GoodsDispatchesServiceAutofillRequest.md#equals-1)
- [fromBinary](GoodsDispatchesServiceAutofillRequest.md#frombinary-1)
- [fromJson](GoodsDispatchesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchesServiceAutofillRequest**(`data?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Overrides

Message\&lt;GoodsDispatchesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/goods_dispatches.scailo_pb.ts:662](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L662)

## Properties

### splitIntoUnitQuantity

• `Optional` **splitIntoUnitQuantity**: `boolean`

**`Optional`**

**`Description`**

A boolean flag indicating whether the auto-populated inventory should be split into individual line items of unit quantity (quantity = 1). This is highly valuable for serialized inventory operations where warehouse staff must scan, track, or assign serial numbers to individual items (e.g., electronics, high-value goods) during packing.

**`Example`**

```ts
true
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: optional bool split_into_unit_quantity = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L660)

___

### userComment

• `Optional` **userComment**: `string`

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

from field: optional string user_comment = 1;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L628)

___

### uuid

• **uuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the target Goods Dispatch document that needs to be autofilled.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:644](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L644)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L669)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L667)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchesServiceAutofillRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L668)

## Methods

### clone

▸ **clone**(): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md) \| `PlainMessage`\<[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:687](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L687)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L675)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:679](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L679)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchesServiceAutofillRequest`](GoodsDispatchesServiceAutofillRequest.md)

#### Defined in

[src/goods_dispatches.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_dispatches.scailo_pb.ts#L683)
