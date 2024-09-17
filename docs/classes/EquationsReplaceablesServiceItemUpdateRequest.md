[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceItemUpdateRequest

# Class: EquationsReplaceablesServiceItemUpdateRequest

Describes the parameters required to update an item in a equation replaceable

**`Generated`**

from message Scailo.EquationsReplaceablesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\>

  ↳ **`EquationsReplaceablesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](EquationsReplaceablesServiceItemUpdateRequest.md#id)
- [replaceableType](EquationsReplaceablesServiceItemUpdateRequest.md#replaceabletype)
- [specifications](EquationsReplaceablesServiceItemUpdateRequest.md#specifications)
- [unitPrice](EquationsReplaceablesServiceItemUpdateRequest.md#unitprice)
- [userComment](EquationsReplaceablesServiceItemUpdateRequest.md#usercomment)
- [fields](EquationsReplaceablesServiceItemUpdateRequest.md#fields)
- [runtime](EquationsReplaceablesServiceItemUpdateRequest.md#runtime)
- [typeName](EquationsReplaceablesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceItemUpdateRequest.md#clone)
- [equals](EquationsReplaceablesServiceItemUpdateRequest.md#equals)
- [fromBinary](EquationsReplaceablesServiceItemUpdateRequest.md#frombinary)
- [fromJson](EquationsReplaceablesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceItemUpdateRequest.md#gettype)
- [toBinary](EquationsReplaceablesServiceItemUpdateRequest.md#tobinary)
- [toJSON](EquationsReplaceablesServiceItemUpdateRequest.md#tojson)
- [toJson](EquationsReplaceablesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceItemUpdateRequest.md#tojsonstring)
- [equals](EquationsReplaceablesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceItemUpdateRequest**(`data?`): [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\> |

#### Returns

[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;EquationsReplaceablesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

src/equations_replaceables.scailo_pb.ts:623

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/equations_replaceables.scailo_pb.ts:600

___

### replaceableType

• **replaceableType**: `string` = `""`

Stores the type of the item (whether it is a consumable, or a spare)

**`Generated`**

from field: string replaceable_type = 11;

#### Defined in

src/equations_replaceables.scailo_pb.ts:607

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/equations_replaceables.scailo_pb.ts:621

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

src/equations_replaceables.scailo_pb.ts:614

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equations_replaceables.scailo_pb.ts:593

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_replaceables.scailo_pb.ts:630

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_replaceables.scailo_pb.ts:628

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServiceItemUpdateRequest"``

#### Defined in

src/equations_replaceables.scailo_pb.ts:629

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_replaceables.scailo_pb.ts:650

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:638

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:642

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemUpdateRequest`](EquationsReplaceablesServiceItemUpdateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:646
