[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServiceCountReq

# Class: LabelsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LabelsServiceCountReq

## Hierarchy

- `Message`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

  ↳ **`LabelsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LabelsServiceCountReq.md#constructor)

### Properties

- [code](LabelsServiceCountReq.md#code)
- [creationTimestampEnd](LabelsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LabelsServiceCountReq.md#creationtimestampstart)
- [entityUuid](LabelsServiceCountReq.md#entityuuid)
- [isActive](LabelsServiceCountReq.md#isactive)
- [modificationTimestampEnd](LabelsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LabelsServiceCountReq.md#modificationtimestampstart)
- [name](LabelsServiceCountReq.md#name)
- [fields](LabelsServiceCountReq.md#fields)
- [runtime](LabelsServiceCountReq.md#runtime)
- [typeName](LabelsServiceCountReq.md#typename)

### Methods

- [clone](LabelsServiceCountReq.md#clone)
- [equals](LabelsServiceCountReq.md#equals)
- [fromBinary](LabelsServiceCountReq.md#frombinary)
- [fromJson](LabelsServiceCountReq.md#fromjson)
- [fromJsonString](LabelsServiceCountReq.md#fromjsonstring)
- [getType](LabelsServiceCountReq.md#gettype)
- [toBinary](LabelsServiceCountReq.md#tobinary)
- [toJSON](LabelsServiceCountReq.md#tojson)
- [toJson](LabelsServiceCountReq.md#tojson-1)
- [toJsonString](LabelsServiceCountReq.md#tojsonstring)
- [equals](LabelsServiceCountReq.md#equals-1)
- [fromBinary](LabelsServiceCountReq.md#frombinary-1)
- [fromJson](LabelsServiceCountReq.md#fromjson-1)
- [fromJsonString](LabelsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServiceCountReq**(`data?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Overrides

Message\&lt;LabelsServiceCountReq\&gt;.constructor

#### Defined in

[src/labels.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L837)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the label is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/labels.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L835)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/labels.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L773)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/labels.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L757)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/labels.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L821)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/labels.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L741)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/labels.scailo_pb.ts:805](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L805)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/labels.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L789)

___

### name

• **name**: `string` = `""`

The name of the label

**`Generated`**

from field: string name = 10;

#### Defined in

[src/labels.scailo_pb.ts:828](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L828)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/labels.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L844)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/labels.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L842)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServiceCountReq"``

#### Defined in

[src/labels.scailo_pb.ts:843](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L843)

## Methods

### clone

▸ **clone**(): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LabelsServiceCountReq`](LabelsServiceCountReq.md) \| `PlainMessage`\<[`LabelsServiceCountReq`](LabelsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/labels.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L867)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:855](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L855)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:859](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L859)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServiceCountReq`](LabelsServiceCountReq.md)

#### Defined in

[src/labels.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/labels.scailo_pb.ts#L863)
