[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsReplaceablesServiceCreateRequest

# Class: EquationsReplaceablesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.EquationsReplaceablesServiceCreateRequest

## Hierarchy

- `Message`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\>

  ↳ **`EquationsReplaceablesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsReplaceablesServiceCreateRequest.md#constructor)

### Properties

- [description](EquationsReplaceablesServiceCreateRequest.md#description)
- [entityUuid](EquationsReplaceablesServiceCreateRequest.md#entityuuid)
- [familyId](EquationsReplaceablesServiceCreateRequest.md#familyid)
- [name](EquationsReplaceablesServiceCreateRequest.md#name)
- [userComment](EquationsReplaceablesServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquationsReplaceablesServiceCreateRequest.md#vaultfolderid)
- [fields](EquationsReplaceablesServiceCreateRequest.md#fields)
- [runtime](EquationsReplaceablesServiceCreateRequest.md#runtime)
- [typeName](EquationsReplaceablesServiceCreateRequest.md#typename)

### Methods

- [clone](EquationsReplaceablesServiceCreateRequest.md#clone)
- [equals](EquationsReplaceablesServiceCreateRequest.md#equals)
- [fromBinary](EquationsReplaceablesServiceCreateRequest.md#frombinary)
- [fromJson](EquationsReplaceablesServiceCreateRequest.md#fromjson)
- [fromJsonString](EquationsReplaceablesServiceCreateRequest.md#fromjsonstring)
- [getType](EquationsReplaceablesServiceCreateRequest.md#gettype)
- [toBinary](EquationsReplaceablesServiceCreateRequest.md#tobinary)
- [toJSON](EquationsReplaceablesServiceCreateRequest.md#tojson)
- [toJson](EquationsReplaceablesServiceCreateRequest.md#tojson-1)
- [toJsonString](EquationsReplaceablesServiceCreateRequest.md#tojsonstring)
- [equals](EquationsReplaceablesServiceCreateRequest.md#equals-1)
- [fromBinary](EquationsReplaceablesServiceCreateRequest.md#frombinary-1)
- [fromJson](EquationsReplaceablesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsReplaceablesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsReplaceablesServiceCreateRequest**(`data?`): [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\> |

#### Returns

[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Overrides

Message\&lt;EquationsReplaceablesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equations_replaceables.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L281)

## Properties

### description

• **description**: `string` = `""`

The description of the equation replaceable

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L279)

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

[src/equations_replaceables.scailo_pb.ts:226](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L226)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L272)

___

### name

• **name**: `string` = `""`

The name of the equation replaceable

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L265)

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

[src/equations_replaceables.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L242)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

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

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/equations_replaceables.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L258)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L288)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L286)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsReplaceablesServiceCreateRequest"``

#### Defined in

[src/equations_replaceables.scailo_pb.ts:287](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L287)

## Methods

### clone

▸ **clone**(): [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_replaceables.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L309)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L297)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L301)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsReplaceablesServiceCreateRequest`](EquationsReplaceablesServiceCreateRequest.md)

#### Defined in

[src/equations_replaceables.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/equations_replaceables.scailo_pb.ts#L305)
