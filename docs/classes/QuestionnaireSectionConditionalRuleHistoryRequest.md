[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionConditionalRuleHistoryRequest

# Class: QuestionnaireSectionConditionalRuleHistoryRequest

Represents the request payload containing the parameter constraints required to
retrieve the historical audit trail and lifecycle changes of a specific questionnaire section conditional rule record.

**`Generated`**

from message Scailo.QuestionnaireSectionConditionalRuleHistoryRequest

## Hierarchy

- `Message`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\>

  ↳ **`QuestionnaireSectionConditionalRuleHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionConditionalRuleHistoryRequest.md#constructor)

### Properties

- [familyId](QuestionnaireSectionConditionalRuleHistoryRequest.md#familyid)
- [questionnaireSectionId](QuestionnaireSectionConditionalRuleHistoryRequest.md#questionnairesectionid)
- [fields](QuestionnaireSectionConditionalRuleHistoryRequest.md#fields)
- [runtime](QuestionnaireSectionConditionalRuleHistoryRequest.md#runtime)
- [typeName](QuestionnaireSectionConditionalRuleHistoryRequest.md#typename)

### Methods

- [clone](QuestionnaireSectionConditionalRuleHistoryRequest.md#clone)
- [equals](QuestionnaireSectionConditionalRuleHistoryRequest.md#equals)
- [fromBinary](QuestionnaireSectionConditionalRuleHistoryRequest.md#frombinary)
- [fromJson](QuestionnaireSectionConditionalRuleHistoryRequest.md#fromjson)
- [fromJsonString](QuestionnaireSectionConditionalRuleHistoryRequest.md#fromjsonstring)
- [getType](QuestionnaireSectionConditionalRuleHistoryRequest.md#gettype)
- [toBinary](QuestionnaireSectionConditionalRuleHistoryRequest.md#tobinary)
- [toJSON](QuestionnaireSectionConditionalRuleHistoryRequest.md#tojson)
- [toJson](QuestionnaireSectionConditionalRuleHistoryRequest.md#tojson-1)
- [toJsonString](QuestionnaireSectionConditionalRuleHistoryRequest.md#tojsonstring)
- [equals](QuestionnaireSectionConditionalRuleHistoryRequest.md#equals-1)
- [fromBinary](QuestionnaireSectionConditionalRuleHistoryRequest.md#frombinary-1)
- [fromJson](QuestionnaireSectionConditionalRuleHistoryRequest.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionConditionalRuleHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionConditionalRuleHistoryRequest**(`data?`): [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\> |

#### Returns

[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Overrides

Message\&lt;QuestionnaireSectionConditionalRuleHistoryRequest\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3058](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3058)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target family associated with the historical record.

**`Example`**

```ts
582
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3056](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3056)

___

### questionnaireSectionId

• **questionnaireSectionId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target questionnaire section associated with the historical record.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: uint64 questionnaire_section_id = 10;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3040](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3040)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3065](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3065)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3063](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3063)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionConditionalRuleHistoryRequest"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3064](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3064)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md) \| `PlainMessage`\<[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3082](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3082)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3070](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3070)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3074](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3074)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionConditionalRuleHistoryRequest`](QuestionnaireSectionConditionalRuleHistoryRequest.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3078](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3078)
