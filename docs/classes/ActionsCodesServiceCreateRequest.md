[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceCreateRequest

# Class: ActionsCodesServiceCreateRequest

Request message for creating a new Action Code.
Action Codes are used to classify specific activities, events, or status changes
within the system, often organized in a hierarchical (tree) structure.

**Note:** This is a configuration-level entity used to define categorization
logic for reporting, workflows, and UI visualization.

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

[src/actions_codes.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L237)

## Properties

### bgColor

• **bgColor**: `string` = `""`

**`Optional`**

**`Description`**

The Hexadecimal background color for UI rendering. Used to visually distinguish codes in dashboards or lists.

**`Example`**

```ts
"#FF5733"
```

**`Regex`**

"^#[0-9a-fA-F]{6}$"

**`Format`**

Must be a 6-digit hex code starting with #.

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L191)

___

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique alphanumeric identifier used for system classification. This is typically a short string or mnemonic used in logic and filtering.

**`Example`**

```ts
"TECH_SUP_01"
```

**`Regex`**

.+

**`Format`**

May contain any UTF-8 characters.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/actions_codes.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L159)

___

### description

• **description**: `string` = `""`

**`Optional`**

**`Description`**

Detailed explanation of what this action code represents and when it should be used.

**`Example`**

```ts
"Used for tracking inbound technical support tickets for Tier 1 issues."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string description = 18;

#### Defined in

[src/actions_codes.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L235)

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

[src/actions_codes.scailo_pb.ts:111](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L111)

___

### fgColor

• **fgColor**: `string` = `""`

**`Optional`**

**`Description`**

The Hexadecimal foreground (text) color for UI rendering. Used to visually distinguish codes in dashboards or lists.

**`Example`**

```ts
"#FFFFFF"
```

**`Regex`**

"^#[0-9a-fA-F]{6}$"

**`Format`**

Must be a 6-digit hex code starting with #.

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L175)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

**`Mandatory`**

**`Description`**

Indicates whether this code is a terminal "leaf" node. If `true`, no further sub-codes can be nested under this entry.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool is_leaf = 17;

#### Defined in

[src/actions_codes.scailo_pb.ts:219](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L219)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The display name of the action code. Must be at least 1 character long.

**`Example`**

```ts
"Technical Support"
```

**`Regex`**

.+

**`Format`**

May contain any UTF-8 characters.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L143)

___

### parentActionCodeId

• **parentActionCodeId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the parent category in the action code hierarchy. Set to `0` if this is a top-level (root) action code.

**`Example`**

```ts
105
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 parent_action_code_id = 16;

#### Defined in

[src/actions_codes.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L207)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this action code. Useful for tracking configuration changes in the system history.

**`Example`**

```ts
"Adding new sub-code for regional compliance tracking."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L244)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L242)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceCreateRequest"``

#### Defined in

[src/actions_codes.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L243)

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

[src/actions_codes.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L268)

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

[src/actions_codes.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L256)

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

[src/actions_codes.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L260)

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

[src/actions_codes.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/actions_codes.scailo_pb.ts#L264)
