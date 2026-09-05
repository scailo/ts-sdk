[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceCreateRequest

# Class: DepartmentsServiceCreateRequest

Request message for creating and establishing a new corporate Department.
This record tracks organizational unit hierarchies, internal classification codes,
leadership assignments, and document management paths within a specific tenant entity.

**Note:** This is the primary entry point for HR, Operations, and Admins to
provision new corporate branches, functional teams, or operational cost centers.

**`Generated`**

from message Scailo.DepartmentsServiceCreateRequest

## Hierarchy

- `Message`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

  ↳ **`DepartmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceCreateRequest.md#constructor)

### Properties

- [code](DepartmentsServiceCreateRequest.md#code)
- [description](DepartmentsServiceCreateRequest.md#description)
- [entityUuid](DepartmentsServiceCreateRequest.md#entityuuid)
- [headUserId](DepartmentsServiceCreateRequest.md#headuserid)
- [name](DepartmentsServiceCreateRequest.md#name)
- [userComment](DepartmentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](DepartmentsServiceCreateRequest.md#vaultfolderid)
- [fields](DepartmentsServiceCreateRequest.md#fields)
- [runtime](DepartmentsServiceCreateRequest.md#runtime)
- [typeName](DepartmentsServiceCreateRequest.md#typename)

### Methods

- [clone](DepartmentsServiceCreateRequest.md#clone)
- [equals](DepartmentsServiceCreateRequest.md#equals)
- [fromBinary](DepartmentsServiceCreateRequest.md#frombinary)
- [fromJson](DepartmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](DepartmentsServiceCreateRequest.md#fromjsonstring)
- [getType](DepartmentsServiceCreateRequest.md#gettype)
- [toBinary](DepartmentsServiceCreateRequest.md#tobinary)
- [toJSON](DepartmentsServiceCreateRequest.md#tojson)
- [toJson](DepartmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](DepartmentsServiceCreateRequest.md#tojsonstring)
- [equals](DepartmentsServiceCreateRequest.md#equals-1)
- [fromBinary](DepartmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](DepartmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](DepartmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceCreateRequest**(`data?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Overrides

Message\&lt;DepartmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:225](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L225)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or internal alphanumeric token used to classify the department for billing or budgeting.

**`Example`**

```ts
"DEPT-ENG-04"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/departments.scailo_pb.ts:191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L191)

___

### description

• **description**: `string` = `""`

**`Mandatory`**

**`Description`**

Expanded details outlining the core operational responsibilities, functions, or charter of the department.

**`Example`**

```ts
"Responsible for developing core cloud infrastructure and cross-platform software systems."
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string description = 13;

#### Defined in

[src/departments.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L223)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 1;

#### Defined in

[src/departments.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L127)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the user assigned as the department head.

**`Example`**

```ts
8842
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 head_user_id = 12;

#### Defined in

[src/departments.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L207)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or friendly name of the department.

**`Example`**

```ts
"Engineering and Architecture"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/departments.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L175)

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

from field: optional string user_comment = 2;

#### Defined in

[src/departments.scailo_pb.ts:143](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L143)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/departments.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L159)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L232)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L230)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceCreateRequest"``

#### Defined in

[src/departments.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L231)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L254)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L242)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L246)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:250](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/departments.scailo_pb.ts#L250)
