[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServiceCreateRequest

# Class: NotesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.NotesServiceCreateRequest

## Hierarchy

- `Message`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\>

  ↳ **`NotesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](NotesServiceCreateRequest.md#constructor)

### Properties

- [activityId](NotesServiceCreateRequest.md#activityid)
- [activityStatusId](NotesServiceCreateRequest.md#activitystatusid)
- [description](NotesServiceCreateRequest.md#description)
- [employeeId](NotesServiceCreateRequest.md#employeeid)
- [entityUuid](NotesServiceCreateRequest.md#entityuuid)
- [projectId](NotesServiceCreateRequest.md#projectid)
- [title](NotesServiceCreateRequest.md#title)
- [userComment](NotesServiceCreateRequest.md#usercomment)
- [vaultFolderId](NotesServiceCreateRequest.md#vaultfolderid)
- [fields](NotesServiceCreateRequest.md#fields)
- [runtime](NotesServiceCreateRequest.md#runtime)
- [typeName](NotesServiceCreateRequest.md#typename)

### Methods

- [clone](NotesServiceCreateRequest.md#clone)
- [equals](NotesServiceCreateRequest.md#equals)
- [fromBinary](NotesServiceCreateRequest.md#frombinary)
- [fromJson](NotesServiceCreateRequest.md#fromjson)
- [fromJsonString](NotesServiceCreateRequest.md#fromjsonstring)
- [getType](NotesServiceCreateRequest.md#gettype)
- [toBinary](NotesServiceCreateRequest.md#tobinary)
- [toJSON](NotesServiceCreateRequest.md#tojson)
- [toJson](NotesServiceCreateRequest.md#tojson-1)
- [toJsonString](NotesServiceCreateRequest.md#tojsonstring)
- [equals](NotesServiceCreateRequest.md#equals-1)
- [fromBinary](NotesServiceCreateRequest.md#frombinary-1)
- [fromJson](NotesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](NotesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServiceCreateRequest**(`data?`): [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\> |

#### Returns

[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Overrides

Message\&lt;NotesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/notes.scailo_pb.ts:306](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L306)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

The associated activity ID

**`Generated`**

from field: uint64 activity_id = 21;

#### Defined in

[src/notes.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L297)

___

### activityStatusId

• **activityStatusId**: `bigint` = `protoInt64.zero`

The associated activity status ID

**`Generated`**

from field: uint64 activity_status_id = 22;

#### Defined in

[src/notes.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L304)

___

### description

• **description**: `string` = `""`

The description of the note

**`Generated`**

from field: string description = 11;

#### Defined in

[src/notes.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L283)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

The associated employee ID

**`Generated`**

from field: uint64 employee_id = 20;

#### Defined in

[src/notes.scailo_pb.ts:290](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L290)

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

[src/notes.scailo_pb.ts:239](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L239)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The associated project ID

**`Generated`**

from field: uint64 project_id = 9;

#### Defined in

[src/notes.scailo_pb.ts:269](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L269)

___

### title

• **title**: `string` = `""`

The title of the note

**`Generated`**

from field: string title = 10;

#### Defined in

[src/notes.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L276)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 2;

#### Defined in

[src/notes.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L255)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 8;

#### Defined in

[src/notes.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L262)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/notes.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L313)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/notes.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L311)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServiceCreateRequest"``

#### Defined in

[src/notes.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L312)

## Methods

### clone

▸ **clone**(): [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md) \| `PlainMessage`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md) \| `PlainMessage`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md) \| `PlainMessage`\<[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/notes.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L337)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Defined in

[src/notes.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L325)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Defined in

[src/notes.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L329)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServiceCreateRequest`](NotesServiceCreateRequest.md)

#### Defined in

[src/notes.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/notes.scailo_pb.ts#L333)
