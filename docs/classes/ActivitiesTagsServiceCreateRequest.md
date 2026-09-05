[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesTagsServiceCreateRequest

# Class: ActivitiesTagsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ActivitiesTagsServiceCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\>

  ↳ **`ActivitiesTagsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesTagsServiceCreateRequest.md#constructor)

### Properties

- [bgColor](ActivitiesTagsServiceCreateRequest.md#bgcolor)
- [code](ActivitiesTagsServiceCreateRequest.md#code)
- [description](ActivitiesTagsServiceCreateRequest.md#description)
- [entityUuid](ActivitiesTagsServiceCreateRequest.md#entityuuid)
- [fgColor](ActivitiesTagsServiceCreateRequest.md#fgcolor)
- [isLeaf](ActivitiesTagsServiceCreateRequest.md#isleaf)
- [name](ActivitiesTagsServiceCreateRequest.md#name)
- [parentActivityTagId](ActivitiesTagsServiceCreateRequest.md#parentactivitytagid)
- [userComment](ActivitiesTagsServiceCreateRequest.md#usercomment)
- [fields](ActivitiesTagsServiceCreateRequest.md#fields)
- [runtime](ActivitiesTagsServiceCreateRequest.md#runtime)
- [typeName](ActivitiesTagsServiceCreateRequest.md#typename)

### Methods

- [clone](ActivitiesTagsServiceCreateRequest.md#clone)
- [equals](ActivitiesTagsServiceCreateRequest.md#equals)
- [fromBinary](ActivitiesTagsServiceCreateRequest.md#frombinary)
- [fromJson](ActivitiesTagsServiceCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesTagsServiceCreateRequest.md#fromjsonstring)
- [getType](ActivitiesTagsServiceCreateRequest.md#gettype)
- [toBinary](ActivitiesTagsServiceCreateRequest.md#tobinary)
- [toJSON](ActivitiesTagsServiceCreateRequest.md#tojson)
- [toJson](ActivitiesTagsServiceCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesTagsServiceCreateRequest.md#tojsonstring)
- [equals](ActivitiesTagsServiceCreateRequest.md#equals-1)
- [fromBinary](ActivitiesTagsServiceCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesTagsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesTagsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesTagsServiceCreateRequest**(`data?`): [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\> |

#### Returns

[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesTagsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/activities_tags.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L164)

## Properties

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/activities_tags.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L141)

___

### code

• **code**: `string` = `""`

The unique code by which the activity tag is classified

**`Generated`**

from field: string code = 11;

#### Defined in

[src/activities_tags.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L127)

___

### description

• **description**: `string` = `""`

The description of the activity tag

**`Generated`**

from field: string description = 18;

#### Defined in

[src/activities_tags.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L162)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/activities_tags.scailo_pb.ts:106](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L106)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/activities_tags.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L134)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if this is a leaf activity tag or a non-leaf activity tag

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

[src/activities_tags.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L155)

___

### name

• **name**: `string` = `""`

The name of the activity tag

**`Generated`**

from field: string name = 10;

#### Defined in

[src/activities_tags.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L120)

___

### parentActivityTagId

• **parentActivityTagId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent activity tag (0, if the first activity tag that is being created is a leaf activity tag)

**`Generated`**

from field: uint64 parent_activity_tag_id = 16;

#### Defined in

[src/activities_tags.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L148)

___

### userComment

• **userComment**: `string` = `""`

ActivitiesTags any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/activities_tags.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L113)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_tags.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L171)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_tags.scailo_pb.ts:169](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L169)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesTagsServiceCreateRequest"``

#### Defined in

[src/activities_tags.scailo_pb.ts:170](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L170)

## Methods

### clone

▸ **clone**(): [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md) \| `PlainMessage`\<[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_tags.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L195)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L183)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:187](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L187)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesTagsServiceCreateRequest`](ActivitiesTagsServiceCreateRequest.md)

#### Defined in

[src/activities_tags.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/activities_tags.scailo_pb.ts#L191)
