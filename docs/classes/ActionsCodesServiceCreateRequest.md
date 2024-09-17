[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceCreateRequest

# Class: ActionsCodesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ActionsCodesServiceCreateRequest

## Hierarchy

- `Message`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\>

  ↳ **`ActionsCodesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceCreateRequest.md#constructor)

### Properties

- [bgColor](ActionsCodesServiceCreateRequest.md#bgcolor)
- [code](ActionsCodesServiceCreateRequest.md#code)
- [description](ActionsCodesServiceCreateRequest.md#description)
- [entityUuid](ActionsCodesServiceCreateRequest.md#entityuuid)
- [fgColor](ActionsCodesServiceCreateRequest.md#fgcolor)
- [isLeaf](ActionsCodesServiceCreateRequest.md#isleaf)
- [name](ActionsCodesServiceCreateRequest.md#name)
- [parentActionCodeId](ActionsCodesServiceCreateRequest.md#parentactioncodeid)
- [userComment](ActionsCodesServiceCreateRequest.md#usercomment)
- [fields](ActionsCodesServiceCreateRequest.md#fields)
- [runtime](ActionsCodesServiceCreateRequest.md#runtime)
- [typeName](ActionsCodesServiceCreateRequest.md#typename)

### Methods

- [clone](ActionsCodesServiceCreateRequest.md#clone)
- [equals](ActionsCodesServiceCreateRequest.md#equals)
- [fromBinary](ActionsCodesServiceCreateRequest.md#frombinary)
- [fromJson](ActionsCodesServiceCreateRequest.md#fromjson)
- [fromJsonString](ActionsCodesServiceCreateRequest.md#fromjsonstring)
- [getType](ActionsCodesServiceCreateRequest.md#gettype)
- [toBinary](ActionsCodesServiceCreateRequest.md#tobinary)
- [toJSON](ActionsCodesServiceCreateRequest.md#tojson)
- [toJson](ActionsCodesServiceCreateRequest.md#tojson-1)
- [toJsonString](ActionsCodesServiceCreateRequest.md#tojsonstring)
- [equals](ActionsCodesServiceCreateRequest.md#equals-1)
- [fromBinary](ActionsCodesServiceCreateRequest.md#frombinary-1)
- [fromJson](ActionsCodesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceCreateRequest**(`data?`): [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\> |

#### Returns

[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Overrides

Message\&lt;ActionsCodesServiceCreateRequest\&gt;.constructor

#### Defined in

src/actions_codes.scailo_pb.ts:155

## Properties

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

src/actions_codes.scailo_pb.ts:132

___

### code

• **code**: `string` = `""`

The unique code by which the action code is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/actions_codes.scailo_pb.ts:118

___

### description

• **description**: `string` = `""`

The description of the action code

**`Generated`**

from field: string description = 18;

#### Defined in

src/actions_codes.scailo_pb.ts:153

___

### entityUuid

• **entityUuid**: `string` = `""`

ActionsCodes a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/actions_codes.scailo_pb.ts:97

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

src/actions_codes.scailo_pb.ts:125

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf action code or a non-leaf action code

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

src/actions_codes.scailo_pb.ts:146

___

### name

• **name**: `string` = `""`

The name of the action code

**`Generated`**

from field: string name = 10;

#### Defined in

src/actions_codes.scailo_pb.ts:111

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)

**`Generated`**

from field: uint64 parent_action_code_id = 16;

#### Defined in

src/actions_codes.scailo_pb.ts:139

___

### userComment

• **userComment**: `string` = `""`

ActionsCodes any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/actions_codes.scailo_pb.ts:104

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/actions_codes.scailo_pb.ts:162

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/actions_codes.scailo_pb.ts:160

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceCreateRequest"``

#### Defined in

src/actions_codes.scailo_pb.ts:161

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/actions_codes.scailo_pb.ts:186

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Defined in

src/actions_codes.scailo_pb.ts:174

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Defined in

src/actions_codes.scailo_pb.ts:178

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceCreateRequest`](ActionsCodesServiceCreateRequest.md)

#### Defined in

src/actions_codes.scailo_pb.ts:182
