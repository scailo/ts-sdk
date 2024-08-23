[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceItemCreateRequest

# Class: EquationsReplaceablesServiceItemCreateRequest

Describes the parameters required to add an item to a equation replaceable

**`Generated`**

from message Scailo.EquationsReplaceablesServiceItemCreateRequest

## Hierarchy

- `Message`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

  ↳ **`EquationsReplaceablesServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsReplaceablesServiceItemCreateRequest.md#equationid)
- [replaceableFamilyId](EquationsReplaceablesServiceItemCreateRequest.md#replaceablefamilyid)
- [replaceableType](EquationsReplaceablesServiceItemCreateRequest.md#replaceabletype)
- [specifications](EquationsReplaceablesServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsReplaceablesServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsReplaceablesServiceItemCreateRequest.md#usercomment)
- [fields](EquationsReplaceablesServiceItemCreateRequest.md#fields)
- [runtime](EquationsReplaceablesServiceItemCreateRequest.md#runtime)
- [typeName](EquationsReplaceablesServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceItemCreateRequest.md#clone)
- [equals](EquationsReplaceablesServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsReplaceablesServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsReplaceablesServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsReplaceablesServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsReplaceablesServiceItemCreateRequest.md#tojson)
- [toJson](EquationsReplaceablesServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsReplaceablesServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceItemCreateRequest**(`data?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Overrides

Message\&lt;EquationsReplaceablesServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/equations_replaceables.scailo_pb.ts:548

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation replaceable

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

src/equations_replaceables.scailo_pb.ts:518

___

### replaceableFamilyId

• **replaceableFamilyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 replaceable_family_id = 12;

#### Defined in

src/equations_replaceables.scailo_pb.ts:532

___

### replaceableType

• **replaceableType**: `string` = `""`

Stores the type of the item (whether it is a consumable, or a spare)

**`Generated`**

from field: string replaceable_type = 11;

#### Defined in

src/equations_replaceables.scailo_pb.ts:525

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/equations_replaceables.scailo_pb.ts:546

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

src/equations_replaceables.scailo_pb.ts:539

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/equations_replaceables.scailo_pb.ts:511

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_replaceables.scailo_pb.ts:555

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_replaceables.scailo_pb.ts:553

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServiceItemCreateRequest"``

#### Defined in

src/equations_replaceables.scailo_pb.ts:554

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_replaceables.scailo_pb.ts:576

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:564

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:568

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceItemCreateRequest`](EquationsReplaceablesServiceItemCreateRequest.md)

#### Defined in

src/equations_replaceables.scailo_pb.ts:572
