[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServiceCreateRequest

# Class: ShiftsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ShiftsServiceCreateRequest

## Hierarchy

- `Message`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

  ↳ **`ShiftsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ShiftsServiceCreateRequest.md#constructor)

### Properties

- [code](ShiftsServiceCreateRequest.md#code)
- [dayOfWeek](ShiftsServiceCreateRequest.md#dayofweek)
- [description](ShiftsServiceCreateRequest.md#description)
- [endAt](ShiftsServiceCreateRequest.md#endat)
- [entityUuid](ShiftsServiceCreateRequest.md#entityuuid)
- [name](ShiftsServiceCreateRequest.md#name)
- [startAt](ShiftsServiceCreateRequest.md#startat)
- [timezone](ShiftsServiceCreateRequest.md#timezone)
- [userComment](ShiftsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ShiftsServiceCreateRequest.md#vaultfolderid)
- [fields](ShiftsServiceCreateRequest.md#fields)
- [runtime](ShiftsServiceCreateRequest.md#runtime)
- [typeName](ShiftsServiceCreateRequest.md#typename)

### Methods

- [clone](ShiftsServiceCreateRequest.md#clone)
- [equals](ShiftsServiceCreateRequest.md#equals)
- [fromBinary](ShiftsServiceCreateRequest.md#frombinary)
- [fromJson](ShiftsServiceCreateRequest.md#fromjson)
- [fromJsonString](ShiftsServiceCreateRequest.md#fromjsonstring)
- [getType](ShiftsServiceCreateRequest.md#gettype)
- [toBinary](ShiftsServiceCreateRequest.md#tobinary)
- [toJSON](ShiftsServiceCreateRequest.md#tojson)
- [toJson](ShiftsServiceCreateRequest.md#tojson-1)
- [toJsonString](ShiftsServiceCreateRequest.md#tojsonstring)
- [equals](ShiftsServiceCreateRequest.md#equals-1)
- [fromBinary](ShiftsServiceCreateRequest.md#frombinary-1)
- [fromJson](ShiftsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ShiftsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServiceCreateRequest**(`data?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Overrides

Message\&lt;ShiftsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L213)

## Properties

### code

• **code**: `string` = `""`

The shift code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/shifts.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L176)

___

### dayOfWeek

• **dayOfWeek**: `string` = `""`

The week day that the shift is applicable on

**`Generated`**

from field: string day_of_week = 15;

#### Defined in

[src/shifts.scailo_pb.ts:204](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L204)

___

### description

• **description**: `string` = `""`

The description of the shift

**`Generated`**

from field: string description = 12;

#### Defined in

[src/shifts.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L183)

___

### endAt

• **endAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift ends (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 end_at = 14;

#### Defined in

[src/shifts.scailo_pb.ts:197](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L197)

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

[src/shifts.scailo_pb.ts:130](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L130)

___

### name

• **name**: `string` = `""`

The name of the shift

**`Generated`**

from field: string name = 10;

#### Defined in

[src/shifts.scailo_pb.ts:169](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L169)

___

### startAt

• **startAt**: `bigint` = `protoInt64.zero`

The timestamp of when the shift begins (in seconds within a 24 hour cycle)

**`Generated`**

from field: uint64 start_at = 13;

#### Defined in

[src/shifts.scailo_pb.ts:190](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L190)

___

### timezone

• **timezone**: `string` = `""`

The timezone as represented in the TZ database

**`Generated`**

from field: string timezone = 16;

#### Defined in

[src/shifts.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L211)

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

[src/shifts.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L146)

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

[src/shifts.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L220)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:218](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L218)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServiceCreateRequest"``

#### Defined in

[src/shifts.scailo_pb.ts:219](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L219)

## Methods

### clone

▸ **clone**(): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md) \| `PlainMessage`\<[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L245)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

[src/shifts.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L233)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

[src/shifts.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L237)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServiceCreateRequest`](ShiftsServiceCreateRequest.md)

#### Defined in

[src/shifts.scailo_pb.ts:241](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/shifts.scailo_pb.ts#L241)
