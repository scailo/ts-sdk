[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceItemUpdateRequest

# Class: PurchasesIndentsServiceItemUpdateRequest

Describes the parameters required to update an item in a purchase indent

**`Generated`**

from message Scailo.PurchasesIndentsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

  ↳ **`PurchasesIndentsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](PurchasesIndentsServiceItemUpdateRequest.md#deliverydate)
- [id](PurchasesIndentsServiceItemUpdateRequest.md#id)
- [internalQuantity](PurchasesIndentsServiceItemUpdateRequest.md#internalquantity)
- [specifications](PurchasesIndentsServiceItemUpdateRequest.md#specifications)
- [userComment](PurchasesIndentsServiceItemUpdateRequest.md#usercomment)
- [fields](PurchasesIndentsServiceItemUpdateRequest.md#fields)
- [runtime](PurchasesIndentsServiceItemUpdateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceItemUpdateRequest.md#clone)
- [equals](PurchasesIndentsServiceItemUpdateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceItemUpdateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceItemUpdateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceItemUpdateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceItemUpdateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceItemUpdateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceItemUpdateRequest**(`data?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L812)

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

[src/purchases_indents.scailo_pb.ts:803](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L803)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/purchases_indents.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L789)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/purchases_indents.scailo_pb.ts:796](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L796)

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/purchases_indents.scailo_pb.ts:810](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L810)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/purchases_indents.scailo_pb.ts:782](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L782)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L819)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L817)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceItemUpdateRequest"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:818](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L818)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L839)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L827)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L831)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceItemUpdateRequest`](PurchasesIndentsServiceItemUpdateRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L835)
