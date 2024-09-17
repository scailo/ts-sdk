[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesOrdersServiceAutofillRequest

# Class: PurchasesOrdersServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.PurchasesOrdersServiceAutofillRequest

## Hierarchy

- `Message`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\>

  ↳ **`PurchasesOrdersServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesOrdersServiceAutofillRequest.md#constructor)

### Properties

- [consolidateReferencedItems](PurchasesOrdersServiceAutofillRequest.md#consolidatereferenceditems)
- [id](PurchasesOrdersServiceAutofillRequest.md#id)
- [userComment](PurchasesOrdersServiceAutofillRequest.md#usercomment)
- [fields](PurchasesOrdersServiceAutofillRequest.md#fields)
- [runtime](PurchasesOrdersServiceAutofillRequest.md#runtime)
- [typeName](PurchasesOrdersServiceAutofillRequest.md#typename)

### Methods

- [clone](PurchasesOrdersServiceAutofillRequest.md#clone)
- [equals](PurchasesOrdersServiceAutofillRequest.md#equals)
- [fromBinary](PurchasesOrdersServiceAutofillRequest.md#frombinary)
- [fromJson](PurchasesOrdersServiceAutofillRequest.md#fromjson)
- [fromJsonString](PurchasesOrdersServiceAutofillRequest.md#fromjsonstring)
- [getType](PurchasesOrdersServiceAutofillRequest.md#gettype)
- [toBinary](PurchasesOrdersServiceAutofillRequest.md#tobinary)
- [toJSON](PurchasesOrdersServiceAutofillRequest.md#tojson)
- [toJson](PurchasesOrdersServiceAutofillRequest.md#tojson-1)
- [toJsonString](PurchasesOrdersServiceAutofillRequest.md#tojsonstring)
- [equals](PurchasesOrdersServiceAutofillRequest.md#equals-1)
- [fromBinary](PurchasesOrdersServiceAutofillRequest.md#frombinary-1)
- [fromJson](PurchasesOrdersServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](PurchasesOrdersServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesOrdersServiceAutofillRequest**(`data?`): [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\> |

#### Returns

[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Overrides

Message\&lt;PurchasesOrdersServiceAutofillRequest\&gt;.constructor

#### Defined in

src/purchases_orders.scailo_pb.ts:762

## Properties

### consolidateReferencedItems

• **consolidateReferencedItems**: `boolean` = `false`

Stores if referenced items should be consolidated

**`Generated`**

from field: bool consolidate_referenced_items = 10;

#### Defined in

src/purchases_orders.scailo_pb.ts:760

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/purchases_orders.scailo_pb.ts:753

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_orders.scailo_pb.ts:746

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_orders.scailo_pb.ts:769

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_orders.scailo_pb.ts:767

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesOrdersServiceAutofillRequest"``

#### Defined in

src/purchases_orders.scailo_pb.ts:768

## Methods

### clone

▸ **clone**(): [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_orders.scailo_pb.ts:787

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:775

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:779

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesOrdersServiceAutofillRequest`](PurchasesOrdersServiceAutofillRequest.md)

#### Defined in

src/purchases_orders.scailo_pb.ts:783
