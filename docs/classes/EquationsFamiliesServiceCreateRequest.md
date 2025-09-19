[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceCreateRequest

# Class: EquationsFamiliesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.EquationsFamiliesServiceCreateRequest

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\>

  ↳ **`EquationsFamiliesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceCreateRequest.md#constructor)

### Properties

- [description](EquationsFamiliesServiceCreateRequest.md#description)
- [entityUuid](EquationsFamiliesServiceCreateRequest.md#entityuuid)
- [familyId](EquationsFamiliesServiceCreateRequest.md#familyid)
- [name](EquationsFamiliesServiceCreateRequest.md#name)
- [userComment](EquationsFamiliesServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquationsFamiliesServiceCreateRequest.md#vaultfolderid)
- [fields](EquationsFamiliesServiceCreateRequest.md#fields)
- [runtime](EquationsFamiliesServiceCreateRequest.md#runtime)
- [typeName](EquationsFamiliesServiceCreateRequest.md#typename)

### Methods

- [clone](EquationsFamiliesServiceCreateRequest.md#clone)
- [equals](EquationsFamiliesServiceCreateRequest.md#equals)
- [fromBinary](EquationsFamiliesServiceCreateRequest.md#frombinary)
- [fromJson](EquationsFamiliesServiceCreateRequest.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceCreateRequest.md#fromjsonstring)
- [getType](EquationsFamiliesServiceCreateRequest.md#gettype)
- [toBinary](EquationsFamiliesServiceCreateRequest.md#tobinary)
- [toJSON](EquationsFamiliesServiceCreateRequest.md#tojson)
- [toJson](EquationsFamiliesServiceCreateRequest.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceCreateRequest.md#tojsonstring)
- [equals](EquationsFamiliesServiceCreateRequest.md#equals-1)
- [fromBinary](EquationsFamiliesServiceCreateRequest.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceCreateRequest**(`data?`): [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\> |

#### Returns

[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:260](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L260)

## Properties

### description

• **description**: `string` = `""`

The description of the equation family

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L258)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L223)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that this equation belongs to

**`Generated`**

from field: uint64 family_id = 12;

#### Defined in

[src/equations_families.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L251)

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_families.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L244)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/equations_families.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L230)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/equations_families.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L237)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L267)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L265)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceCreateRequest"``

#### Defined in

[src/equations_families.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L266)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L288)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:276](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L276)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L280)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceCreateRequest`](EquationsFamiliesServiceCreateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_families.scailo_pb.ts#L284)
