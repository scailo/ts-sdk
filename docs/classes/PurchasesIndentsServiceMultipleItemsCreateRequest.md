[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServiceMultipleItemsCreateRequest

# Class: PurchasesIndentsServiceMultipleItemsCreateRequest

Describes the parameters required to add multiple items to a purchase indent

**`Generated`**

from message Scailo.PurchasesIndentsServiceMultipleItemsCreateRequest

## Hierarchy

- `Message`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\>

  ↳ **`PurchasesIndentsServiceMultipleItemsCreateRequest`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServiceMultipleItemsCreateRequest.md#constructor)

### Properties

- [list](PurchasesIndentsServiceMultipleItemsCreateRequest.md#list)
- [purchaseIndentId](PurchasesIndentsServiceMultipleItemsCreateRequest.md#purchaseindentid)
- [userComment](PurchasesIndentsServiceMultipleItemsCreateRequest.md#usercomment)
- [fields](PurchasesIndentsServiceMultipleItemsCreateRequest.md#fields)
- [runtime](PurchasesIndentsServiceMultipleItemsCreateRequest.md#runtime)
- [typeName](PurchasesIndentsServiceMultipleItemsCreateRequest.md#typename)

### Methods

- [clone](PurchasesIndentsServiceMultipleItemsCreateRequest.md#clone)
- [equals](PurchasesIndentsServiceMultipleItemsCreateRequest.md#equals)
- [fromBinary](PurchasesIndentsServiceMultipleItemsCreateRequest.md#frombinary)
- [fromJson](PurchasesIndentsServiceMultipleItemsCreateRequest.md#fromjson)
- [fromJsonString](PurchasesIndentsServiceMultipleItemsCreateRequest.md#fromjsonstring)
- [getType](PurchasesIndentsServiceMultipleItemsCreateRequest.md#gettype)
- [toBinary](PurchasesIndentsServiceMultipleItemsCreateRequest.md#tobinary)
- [toJSON](PurchasesIndentsServiceMultipleItemsCreateRequest.md#tojson)
- [toJson](PurchasesIndentsServiceMultipleItemsCreateRequest.md#tojson-1)
- [toJsonString](PurchasesIndentsServiceMultipleItemsCreateRequest.md#tojsonstring)
- [equals](PurchasesIndentsServiceMultipleItemsCreateRequest.md#equals-1)
- [fromBinary](PurchasesIndentsServiceMultipleItemsCreateRequest.md#frombinary-1)
- [fromJson](PurchasesIndentsServiceMultipleItemsCreateRequest.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServiceMultipleItemsCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServiceMultipleItemsCreateRequest**(`data?`): [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Overrides

Message\&lt;PurchasesIndentsServiceMultipleItemsCreateRequest\&gt;.constructor

#### Defined in

src/purchases_indents.scailo_pb.ts:740

## Properties

### list

• **list**: [`PurchasesIndentsServiceMultipleItemsSingleton`](PurchasesIndentsServiceMultipleItemsSingleton.md)[] = `[]`

List of items

**`Generated`**

from field: repeated Scailo.PurchasesIndentsServiceMultipleItemsSingleton list = 11;

#### Defined in

src/purchases_indents.scailo_pb.ts:738

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

Stores the purchase indent ID

**`Generated`**

from field: uint64 purchase_indent_id = 10;

#### Defined in

src/purchases_indents.scailo_pb.ts:731

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/purchases_indents.scailo_pb.ts:724

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/purchases_indents.scailo_pb.ts:747

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/purchases_indents.scailo_pb.ts:745

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServiceMultipleItemsCreateRequest"``

#### Defined in

src/purchases_indents.scailo_pb.ts:746

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md) \| `PlainMessage`\<[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/purchases_indents.scailo_pb.ts:765

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:753

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:757

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServiceMultipleItemsCreateRequest`](PurchasesIndentsServiceMultipleItemsCreateRequest.md)

#### Defined in

src/purchases_indents.scailo_pb.ts:761
